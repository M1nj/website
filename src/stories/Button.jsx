import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


export const Button = ({ style, label, ...props }) => {
  return (
    <button  className={['button', `button--${style}`].join(' ')}>
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

