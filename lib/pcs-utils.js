// pcs-utils.js
// Kumpulan utility functions vanilla JS yang reusable untuk berbagai project

/**
 * Format date ke string dengan format custom ala date-fns/moment.
 * Token: yyyy, yy, MMMM, MMM, MM, dd, HH, mm, ss, SSS
 * - yyyy: 4 digit tahun (2025)
 * - yy: 2 digit tahun (25)
 * - MMMM: nama bulan panjang (Januari)
 * - MMM: nama bulan singkat (Jan)
 * - MM: 2 digit bulan (01)
 * - dd: 2 digit tanggal (06)
 * - HH: 2 digit jam (24 jam)
 * - mm: 2 digit menit
 * - ss: 2 digit detik
 * - SSS: 3 digit milidetik
 * Separator bebas: -, /, spasi, dst
 * @param {Date|string|number} date - Tanggal yang akan diformat
 * @param {string} [format='yyyy-MM-dd'] - Format output
 * @returns {string}
 */
export function formatDate(date, format = 'yyyy-MM-dd') {
  const d = date instanceof Date ? date : new Date(date);
  const pad = (n, l = 2) => String(n).padStart(l, '0');
  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const monthShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ];
  const map = {
    yyyy: d.getFullYear(),
    yy: String(d.getFullYear()).slice(-2),
    MMMM: monthNames[d.getMonth()],
    MMM: monthShort[d.getMonth()],
    MM: pad(d.getMonth() + 1),
    dd: pad(d.getDate()),
    HH: pad(d.getHours()),
    mm: pad(d.getMinutes()),
    ss: pad(d.getSeconds()),
    SSS: pad(d.getMilliseconds(), 3),
  };
  return format.replace(/yyyy|yy|MMMM|MMM|MM|dd|HH|mm|ss|SSS/g, t => map[t]);
}

/**
 * Format date & time (default: yyyy-MM-dd HH:mm:ss, bisa custom)
 * @param {Date|string|number} date
 * @param {string} [format='yyyy-MM-dd HH:mm:ss']
 * @returns {string}
 */
export function formatDateTime(date, format = 'yyyy-MM-dd HH:mm:ss') {
  return formatDate(date, format);
}

/**
 * Format time only (default: HH:mm:ss, bisa custom)
 * @param {Date|string|number} date
 * @param {string} [format='HH:mm:ss']
 * @returns {string}
 */
export function formatTime(date, format = 'HH:mm:ss') {
  return formatDate(date, format);
}

/**
 * Debounce function: Menunda eksekusi fungsi sampai jeda waktu tertentu.
 * @param {Function} fn - Fungsi yang akan didebounce
 * @param {number} delay - Delay dalam ms
 * @returns {Function}
 */
export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Throttle function: Membatasi eksekusi fungsi hanya sekali per interval.
 * @param {Function} fn - Fungsi yang akan di-throttle
 * @param {number} limit - Interval dalam ms
 * @returns {Function}
 */
export function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Cek apakah value kosong/null/undefined/array kosong/object kosong
 * @param {*} val
 * @returns {boolean}
 */
export function isEmpty(val) {
  if (val == null) return true;
  if (typeof val === 'string' && val.trim() === '') return true;
  if (Array.isArray(val) && val.length === 0) return true;
  if (typeof val === 'object' && !Array.isArray(val)) return Object.keys(val).length === 0;
  return false;
}

/**
 * Salin teks ke clipboard
 * @param {string} text
 * @returns {Promise<void>}
 */
export function copyToClipboard(text) {
  if (navigator && navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return Promise.resolve();
  }
}

/**
 * Generate random string
 * @param {number} length
 * @returns {string}
 */
export function randomString(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Format angka ke format uang dengan separator ribuan (.)
 * @param {number|string} value
 * @param {string} [prefix] - Tambahkan prefix (misal 'Rp ')
 * @returns {string}
 */
export function formatCurrency(value, prefix = 'Rp ') {
  const num = typeof value === 'number' ? value : Number(String(value).replace(/[^\d.-]/g, ''));
  if (isNaN(num)) return '';
  const parts = num.toFixed(0).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return prefix + parts.join(',');
}

// Tambahkan util lain sesuai kebutuhan...