import React, { useState, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface ModalStateContainerChildrenInterface {
  toggle: () => void,
  open: () => void,
  close: () => void,
  isOpen: boolean,
};
interface ModalStateContainerInterface {
  children: ({}:ModalStateContainerChildrenInterface) => ReactNode,
  isInitiallyOpen?: boolean,
}

const ModalStateContainer = ({ children, isInitiallyOpen }:ModalStateContainerInterface) => {
  const [isOpen, setOpen] = useState(isInitiallyOpen || false);
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
        isOpen
      })}
    </React.Fragment>
  );
};

export { ModalStateContainer };
