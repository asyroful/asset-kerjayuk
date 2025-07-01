# Aset Kerjayuk (@kerjayuk/assets)

Pustaka aset dan komponen ikon framework-agnostic untuk Kerjayuk, dibuat menggunakan Web Components.

## Instalasi

```bash
npm install @kerjayuk/assets
```

## Penggunaan

Impor library ini sekali saja di titik masuk utama aplikasi Anda (misal, `main.js`, `index.js`, atau `App.jsx`).

```javascript
// main.js atau App.jsx
import '@kerjayuk/assets';
```

Setelah itu, Anda bisa menggunakan tag `<kerjayuk-icon>` di mana saja di dalam HTML, terlepas dari framework yang Anda gunakan.

### Contoh Penggunaan

```html
<kerjayuk-icon name="home"></kerjayuk-icon>

<kerjayuk-icon name="profile" active="true" size="32"></kerjayuk-icon>
```