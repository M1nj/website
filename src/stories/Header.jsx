import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";


import './header.css';

export const Header = ({name, props}) => (
  <header>
    <div className="wrapper">
      <div className='name'>
        <a href="/">{name}</a>
      </div>
      <div className='links'>
        <a href="../routes/about" >About</a>
        <a href="../routes/contact">Contact</a>
        <a href='https://www.linkedin.com/in/benjamincaillet/'>LinkedIn</a>
      </div>
    </div>
    <Outlet />
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: 'Benjamin Caillet',
};