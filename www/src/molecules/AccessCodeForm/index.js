import React from 'react';
import { Input } from 'ro-component-library/Input';
import { Modal } from 'ro-component-library/Modal';
import { Button } from 'ro-component-library/Button';
import { Block } from 'ro-component-library/utilities/Block';
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
      {({ StyledBody }) => (
        <StyledBody>
          <form
            onSubmit={handleSubmit}
            data-testid="code-form"
            style={{
              minWidth: '320px',
            }}
          >
            <Block display="flex">
              <Block width="100%" marginRight="scale400">
                <Input
                  id="accessCode"
                  model="basic"
                  placeholder="Access Code"
                  overrides={{ Input: { props: { 'data-testid': 'accessCode' } } }}
                  autoFocus
                />
              </Block>
              <Button
                model="baseUI"
                type="submit"
                value="Submit"
                data-testid="submit"
              >
                Submit
              </Button>
            </Block>
          </form>
        </StyledBody>
      )}
    </Modal>
  </>
  );
};
AccessCodeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { AccessCodeForm };
