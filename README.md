
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

// Format tanggal dinamis
formatDate(new Date('2002-06-10'), 'dd-MM-yyyy'); // "10-06-2002"
formatDate(new Date('2002-06-10'), 'dd/MM/yyyy'); // "10/06/2002"
formatDate(new Date('2002-06-10'), 'dd-MMMM-yyyy'); // "10-Juni-2002"
formatDate(new Date('2002-06-10'), 'dd MMM yyyy'); // "10 Jun 2002"
formatDate(new Date('2002-06-10'), 'dd-MM-yy'); // "10-06-02"
formatDate(new Date('2002-06-10'), 'yyyy/MM/dd'); // "2002/06/10"

// Format waktu dinamis
formatTime(new Date('2025-10-06T13:45:12'), 'HH:mm'); // "13:45"
formatTime(new Date('2025-10-06T13:45:12'), 'HH:mm:ss'); // "13:45:12"

// Format dateTime dinamis
formatDateTime(new Date('2025-10-06T13:45:12'), 'dd MMMM yyyy HH:mm'); // "06 Oktober 2025 13:45"
formatDateTime(new Date('2025-10-06T13:45:12'), 'yyyy-MM-dd HH:mm:ss'); // "2025-10-06 13:45:12"

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