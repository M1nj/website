import React from 'react';
import PropTypes from 'prop-types';

import './title.css';



export const Title = ({ size, title, type, url, ...props }) => {
  const CustomTag = `${type}`;
  return (
    <CustomTag className={['article'].join(' ')}>{title}</CustomTag>
  )
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
};

Title.defaultProps = {
  title: 'Project Title',
};

