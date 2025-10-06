
# PCS Asset


Pustaka aset dan komponen ikon & utils untuk PCS, dibuat menggunakan Web Components dan vanilla JS.

## Instalasi


```bash
npm install pcs-asset
```

### Playground


[Demo Playground](https://stellar.pcsindonesia.com/playground)

---


## Utils (pcs-asset/utils)

Kumpulan fungsi utilitas vanilla JS yang bisa digunakan di React, Vue, maupun project JS lain.

### Contoh Penggunaan

```js
import { formatDate, formatDateTime, formatTime, debounce, throttle, isEmpty, copyToClipboard, randomString, formatCurrency } from 'pcs-asset/utils';

// Format tanggal
formatDate(new Date(), 'dd-MM-yyyy'); // "06-10-2025"
formatDateTime(new Date()); // "2025-10-06 13:45:00"
formatTime(new Date()); // "13:45:00"

// Format uang
formatCurrency(1234567); // "Rp 1.234.567"
formatCurrency(1234567, ''); // "1.234.567"

// Debounce
const onInput = debounce((val) => console.log(val), 300);

// Throttle
const onScroll = throttle(() => console.log('scroll'), 500);

// Cek kosong
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true

// Copy ke clipboard
copyToClipboard('teks');

// Random string
randomString(10); // "aZ8kLmP0qR"
```

---

---



## Penggunaan Icon (pcs-asset/icons)

### React

Jika ingin menggunakan sintaks <PCSIcon /> di JSX, Anda bisa membuat komponen wrapper seperti berikut:

```jsx
import { PCSIcon } from 'pcs-asset/icons';

return (
  <PCSIcon name="Home" color="#F82C17" size={20} />
  <PCSIcon name="Profile" color="#F82C17" size={20} secondary-color="#b007c2ff"  />
)
```

Dengan cara ini, Anda bisa menggunakan <PCSIcon /> seperti komponen React biasa.

### Vue

Di Vue, cukup import dan gunakan seperti tag HTML biasa:

```js
import 'pcs-asset/icons';
```

```html
<template>
  <pcs-icon name="Home" color="#333" size="32"></pcs-icon>
</template>
```