import { LitElement, html, css } from 'lit-element';

/**
 * LitIcon is a simple WebComponent to display an icon from a set of icon
 */
export default class LitIcon  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 0 5px;
        box-sizing: content-box;
        vertical-align: sub;
      }
      .iron-icon {
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        fill: currentcolor;
        stroke: none;
        width: 100%;
        height: 100%;
        display: block;
      }
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        height: 100%;
        width: 100%;
        min-width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      size: {
        type: String,
      },
      icon: {
        type: String,
      },
      iconset: {
        type: String,
      }
    };
  }

  constructor() {
    super();
    this.size = '24';
    this.icon = '';
    this.iconset = 'iconset';
    document.iconMap = document.iconMap || {};
    window.addEventListener('ionset-loaded', this.updateIconset.bind(this));
  }

  render() {
    return html`<i></i>`;
  }

  updateIconset() {
    const iconset = document.iconMap[this.iconset];
    if (!iconset) return;

    this.findIcon();

    this.shadowRoot.querySelector("i").style.height = this.size;
    this.shadowRoot.querySelector("i").style.width = this.size;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch(propName) {
        case 'size':
          this.shadowRoot.querySelector("i").style.height = this.size;
          this.shadowRoot.querySelector("i").style.width = this.size;
          break;
        case 'icon':
          this.findIcon();
          break;
      }
    });
  }

  /**
   * FindIcon search for the right iconset
   * Inside the  iconMap and search for the right icon to append to the component
   */
  findIcon() {
    const iconset = document.iconMap[this.iconset];
    if (!iconset) return;

    // Create a temporary template to find new created icons
    const _tpl = document.createElement('template');
    iconset.forEach(icon => _tpl.appendChild(icon));
    let icon = _tpl.querySelector(`#${this.icon}`);
    if (!icon) return;

    this.shadowRoot.querySelector("i").innerHTML = "";
    this._cloneIcon(icon);
  }

  /**
   * This method takes an svg icon definition, create a copy and place it inside the icon component
   * @param {DomNode} icon The svg definition of an icon
   */
  _cloneIcon(icon) {
    let content = icon.cloneNode(true);
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
     */
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // Add iron-icon class in order to add control over color
    svg.classList.add("iron-icon");
    icon.classList.add("iron-icon");
    let viewBox = content.getAttribute("viewBox") || `0 0 ${this.size} ${this.size}`;
    let cssText = "pointer-events: none; display: block; width: 100%; height: 100%;";
    svg.setAttribute("viewBox", viewBox);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("focusable", "false");
    svg.style.cssText = cssText;
    let clonedIcon = icon.cloneNode(true);
    svg.appendChild(clonedIcon);
    const i = this.shadowRoot.querySelector("i");

    i.style.height = this.size;
    i.style.width = this.size;

    i.appendChild(svg);
  }

}

customElements.define('lit-icon', LitIcon);
