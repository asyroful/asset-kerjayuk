// React wrapper untuk custom element <pcs-icon />
// Pastikan React sudah terinstall di project user

import React from 'react';

const PCSIcon = React.forwardRef((props, ref) => {
  return React.createElement('pcs-icon', { ...props, ref });
});

export default PCSIcon;
