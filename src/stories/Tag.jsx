import React from 'react';
import PropTypes from 'prop-types';
import './tag.css';

// pour le type, ce qu'on a fait c'est ternary operator
export const Tag = ({ role, ...props }) => {
  return (
    <div className={['tag', `tag--${role}`].join(' ')}>
      <span>{[`${role}`]}</span>
    </div>
  )
};

Tag.propTypes = {
  role: PropTypes.string.isRequired,
}

