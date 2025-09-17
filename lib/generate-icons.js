// Script untuk generate icon-definitions.js dari list-icon SVG
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'list-icon');
const out = path.join(__dirname, 'icon-definitions.js');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
let icons = {};

files.forEach(file => {
  let svg = fs.readFileSync(path.join(dir, file), 'utf8');
  // Replace warna utama dan aksen
  svg = svg
    .replace(/#1A1A1A/gi, 'currentColor')
    .replace(/#808080/gi, 'var(--secondary-color, currentColor)');
  // Hapus tag <svg> agar hanya inner SVG
  svg = svg.replace(/<svg[^>]*>/i, '').replace(/<\/svg>/i, '');
  icons[path.basename(file, '.svg')] = svg.trim();
});

let outStr = 'export const ICONS = ' + JSON.stringify(icons, null, 2) + ';\n';
fs.writeFileSync(out, outStr);

console.log('icon-definitions.js generated!');
