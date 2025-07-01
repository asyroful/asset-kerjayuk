// lib/kerjayuk-icon.js
import { ICONS } from './icon-definitions.js';

class KerjayukIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'active', 'size', 'color']; // Tambahkan 'color' untuk dipantau
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
    const customColor = this.getAttribute('color') || 'black';
    const iconData = ICONS[name] || '';

    this.shadowRoot.innerHTML = `
      <style>
        /* CSS di dalam Shadow DOM terisolasi dan tidak akan bocor keluar */
        :host {
          display: inline-block;
          vertical-align: middle;
          width: ${size}px;
          height: ${size}px;
        }
        svg {
          width: 100%;
          height: 100%;
        }

        /* --- LOGIKA WARNA --- */
        
        /* Default state (tidak aktif) */
        .simple-icon { stroke: ${customColor}; fill: none; }
        .kypoin-circle { fill: white; stroke: ${customColor}; }
        .kypoin-paths { fill: ${customColor}; }
        
        /* Active state */
        /* Pseudo-class :host([active]) akan cocok jika tag <kerjayuk-icon> memiliki atribut 'active' */
        :host([active]) .simple-icon { stroke: #2563EB; }
        :host([active]) .kypoin-circle { fill: #764AF1; stroke: #764AF1; }
        :host([active]) .kypoin-paths { fill: white; }
      </style>
      
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${iconData}
      </svg>
    `;
  }
}

customElements.define('kerjayuk-icon', KerjayukIcon);