// lib/kerjayuk-icon.js

// lib/kerjayuk-icon.js
import { ICONS } from './icon-definitions.js';

class KerjayukIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'size', 'secondary-color'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    const size = this.getAttribute('size') || '24';
    const color = this.getAttribute('color') || 'currentColor';
    const secondaryColor = this.getAttribute('secondary-color') || 'currentColor';
    let iconData = ICONS[name] || '';

    // Replace color tokens in SVG string
    iconData = iconData
      .replace(/stroke=["']#?currentColor["']/gi, `stroke="${color}"`)
      .replace(/stroke=["']secondary-color["']/gi, `stroke="${secondaryColor}"`)
      .replace(/fill=["']#?currentColor["']/gi, `fill="${color}"`)
      .replace(/fill=["']secondary-color["']/gi, `fill="${secondaryColor}"`);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${size}px;
          height: ${size}px;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${iconData}
      </svg>
    `;
  }
}

customElements.define('pcs-icon', KerjayukIcon);