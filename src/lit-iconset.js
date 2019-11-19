import { LitElement, html, css } from 'lit-element';

export default class LitIconset extends LitElement {
  static get properties() {
    return {
      iconset: {
        type: String
      }
    }
  }
  
  static get styles() {
    return css`
      :host {
        display: none;
      }
    `;
  }

  constructor() {
    super();
    // Initialize the iconMap
    document.iconMap = document.iconMap || {};
    this.iconset = 'iconset';
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    const [ svg ] = slot.assignedNodes().filter(node => node.nodeType !== Node.TEXT_NODE);
    const icons = svg.querySelectorAll('g');
    if (!icons.length) return console.error('[lit-icon] No icons define in iconset');
    document.iconMap[this.iconset] = icons;
    const event = new CustomEvent('ionset-loaded');
    window.dispatchEvent(event);
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('lit-iconset', LitIconset);
