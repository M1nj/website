import React from 'react';
import PropTypes from 'prop-types';
import Test from './assets/projects/test.png'
import { Title } from './Title';
import { Link } from "react-router-dom";

import './img.css';

const Img = ({url,supportText, ...props }) => {

  return (
    <img src={url} alt={supportText}/>
  )
};

Img.propTypes = {
  url: PropTypes.string,
  supportText: PropTypes.string,
};

Img.defaultProps = {
  url: '',
  supportText: '',
};

export default Img;