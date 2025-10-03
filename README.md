# PCS Icons

Pustaka aset dan komponen ikon untuk PCS, dibuat menggunakan Web Components.

## Instalasi

```bash
npm install pcs-icons
```

### Playground

[Demo Playground](https://stellar.pcsindonesia.com/playground)

---


## Penggunaan di React

PCS Icons adalah Web Component (Custom Element), sehingga dapat digunakan di React. Secara default, custom element harus menggunakan huruf kecil di JSX:

```jsx
import 'pcs-icons';

function App() {
	return (
		<div>
			<pcs-icon name="Home" color="#333" size="32"></pcs-icon>
		</div>
	);
}

export default App;
```

### Menggunakan Wrapper agar Bisa <PCSIcon />

Jika ingin menggunakan sintaks <PCSIcon /> di JSX, Anda bisa membuat komponen wrapper seperti berikut:

```jsx
import { PCSIcon} from 'pcs-icons';


return (
  <PCSIcon name="Home" color="#F82C17" size={20} />
  <PCSIcon name="Profile" color="#F82C17" size={20} secondary-color="#b007c2ff"  />
)
```

Dengan cara ini, Anda bisa menggunakan <PCSIcon /> seperti komponen React biasa.

## Penggunaan di Vue

Di Vue, cukup import dan gunakan seperti tag HTML biasa:

```js
import 'pcs-icons';
```

```html
<template>
	<pcs-icon name="Home" color="#333" size="32"></pcs-icon>
</template>
```