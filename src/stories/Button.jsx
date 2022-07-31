import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


export const Button = ({ type, label, ...props }) => {
  return (
    <button  className={['button', `button--${type}`].join(' ')}>
      {[`${label}`]}
    </button>
  )
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'text']),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'primary',
  label: 'Project Title',
};

