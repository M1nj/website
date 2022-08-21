import React from 'react';
import PropTypes from 'prop-types';
import Test from './assets/projects/test.png'
import { Title } from './Title';
import { Link } from "react-router-dom";

import './card.css';

const Card = ({ size, title, description, url, color, whiteText, ...props }) => {

  return (
    <a className={[`card--${size}`].join(' ')} href={url}>
    <div className={['card', `card--${size}`, `${color}`, `${whiteText}`].join(' ')}>
      <div className='cardContent'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='cardMedia'>
        <img src={Test}></img>
      </div>
    </div>
    </a>
  )
};

Card.propTypes = {
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  color: PropTypes.string,
  whiteText: PropTypes.bool,
};

Card.defaultProps = {
  size: 'Medium',
  title: '',
  description: 'Project description',
  url: '',
  color: 'grey-100',
  whiteText: false,
};

export default Card;