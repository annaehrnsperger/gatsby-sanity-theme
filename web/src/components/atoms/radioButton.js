import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioButton = ({ id, value, checked, onChange, label, style }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <StyledLabel style={style}>
    <input
      type="radio"
      name="radio"
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </StyledLabel>
);

const StyledLabel = styled.label`
  position: relative;
`;

RadioButton.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default RadioButton;
