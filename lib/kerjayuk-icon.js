// lib/kerjayuk-icon.js

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

    // Ambil SVG dari folder list-icon secara dinamis
    fetch(`./lib/list-icon/${name}.svg`)
      .then(res => res.text())
      .then(svgRaw => {
        // Cari tag <svg> dan ambil isinya
        const svgMatch = svgRaw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
        if (!svgMatch) {
          this.shadowRoot.innerHTML = '';
          return;
        }
        let inner = svgMatch[1];
        // Ganti warna utama dan aksen agar bisa dualtone
        inner = inner
          .replace(/#1A1A1A/gi, 'currentColor')
          .replace(/#808080/gi, 'var(--secondary-color, currentColor)');
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: inline-flex;
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
            ${inner}
          </svg>
        `;
      })
      .catch(() => {
        this.shadowRoot.innerHTML = '';
      });
  }
}

customElements.define('pcs-icon', KerjayukIcon);