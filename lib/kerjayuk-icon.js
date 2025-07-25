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
    const secondaryColor = this.getAttribute('secondary-color') || 'currentColor';
    
    const iconData = ICONS[name] || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex; /* Menggunakan inline-flex agar SVG pas di dalamnya */
          align-items: center;
          justify-content: center;
          width: ${size}px;
          height: ${size}px;
          --secondary-color: ${secondaryColor}; 
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

customElements.define('kerjayuk-icon', KerjayukIcon);