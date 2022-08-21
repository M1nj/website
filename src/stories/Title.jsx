import React from 'react';
import PropTypes from 'prop-types';

import './title.css';



export const Title = ({ size, label, type, url, ...props }) => {
  const CustomTag = `${type}`;
  return (
    <CustomTag className={['article'].join(' ')} style={{ whiteSpace: "pre-line" }}>{label}</CustomTag>
  )
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
};

Title.defaultProps = {
  label: 'Project Title',
};

