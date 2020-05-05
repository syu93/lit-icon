export default class LitIconset extends HTMLElement {
  constructor() {
    super();
    // Initialize the iconMap
    document.iconMap = document.iconMap || {};
    this._iconset = 'iconset';

    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<style>:host{display:none;}</style><slot></slot>`;
  }

  static get observedAttributes() { return [ 'iconset' ]; }

  get iconset() {
    return this._iconset;
  }

  set iconset(value) {
   this._iconset = value;
   this.setAttribute('iconset', value);
  }

  connectedCallback() {
    this.setIconset();
  }

  /**
   * Set the iconMap object with the given name
   */
  setIconset() {
    const slot = this.shadowRoot.querySelector('slot');
    const [ svg ] = slot.assignedNodes().filter(node => node.nodeType !== Node.TEXT_NODE);
    const icons = svg.querySelectorAll('g');
    if (!icons.length) return false;
    document.iconMap[this._iconset] = icons;
    const event = new CustomEvent('ionset-loaded');
    return window.dispatchEvent(event);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'iconset':
        this._iconset = newValue;
        this.setIconset();
        break;
      default:
        break;
      
    }
  }
}

customElements.define('lit-iconset', LitIconset);
