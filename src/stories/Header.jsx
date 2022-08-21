import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";


import './header.css';

export const Header = ({name, props}) => (
  <header>
    <div className="wrapper">
      <div className='name'>
        <Link to="../">{name}</Link>
      </div>
      <div className='links'>
        <Link to="./routes/about" >About</Link>
        <Link to="./routes/contact">Contact</Link>
        <a href='https://linkedin.com'>LinkedIn</a>
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