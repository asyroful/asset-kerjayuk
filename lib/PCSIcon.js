// React wrapper untuk custom element <pcs-icon />
// Pastikan React sudah terinstall di project user

const React = require('react');

const PCSIcon = React.forwardRef((props, ref) => {
  return React.createElement('pcs-icon', { ...props, ref });
});

module.exports = PCSIcon;
