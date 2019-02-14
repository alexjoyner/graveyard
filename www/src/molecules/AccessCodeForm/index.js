import React from 'react';
import { Modal } from 'ro-component-library';
import PropTypes from 'prop-types';

const AccessCodeForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { accessCode } = e.target.elements;
    onSubmit({ accessCode: accessCode.value });
  };
  return (
  <>
    <Modal>
      <form onSubmit={handleSubmit} data-testid="code-form">
        <label htmlFor="accessCode">
          Access Code
          <input type="text" id="accessCode" />
        </label>
        <button type="submit" value="Submit" data-testid="submit">Submit</button>
      </form>
    </Modal>
  </>
  );
};
AccessCodeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { AccessCodeForm };
