import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalStateContainer = ({ children, isInitiallyOpen, ...props }) => {
  const [isOpen, setOpen] = useState(isInitiallyOpen);
  const toggle = (open = !isOpen) => {
    setOpen(Boolean(open));
  };
  const open = () => {
    toggle(true);
  };
  const close = () => {
    toggle(false);
  };
  return (
    <React.Fragment>
      {children({
        toggle,
        open,
        close,
        isOpen,
        ...props,
      })}
    </React.Fragment>
  );
};
ModalStateContainer.propTypes = {
  isInitiallyOpen: PropTypes.bool,
};
ModalStateContainer.defaultProps = {
  isInitiallyOpen: false,
};

export { ModalStateContainer };
