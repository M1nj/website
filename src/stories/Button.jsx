import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

// pour le type, ce qu'on a fait c'est ternary operator
export const Button = ({ style, label, type, ...props }) => {
  return (
    <button type={type='submit'?'submit':'button'} className={['button', `button--${style}`].join(' ')}>
      {[`${label}`]}
    </button>
  )
};

Button.propTypes = {
  style: PropTypes.oneOf(['primary', 'secondary', 'text']),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: 'primary',
  label: 'Project Title',
};

