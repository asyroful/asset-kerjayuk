// lib/kerjayuk-icon.js
import { ICONS } from './icon-definitions.js';

class KerjayukIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'size', 'color'];
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
    const color = this.getAttribute('color') || 'black';
    
    const iconData = ICONS[name] || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex; /* Menggunakan inline-flex agar SVG pas di dalamnya */
          align-items: center;
          justify-content: center;
          width: ${size}px;
          height: ${size}px;
          color: ${color}; /* Atur warna di sini, yang akan diwarisi oleh 'currentColor' di SVG */
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