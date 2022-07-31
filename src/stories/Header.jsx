import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Contact from "../routes/contact";

import './header.css';

export const Header = ({ }) => (
  <header>
    <div className="wrapper">
      <div className='name'>
        <Link to="../">Benjamin Caillet</Link>
      </div>
      <div className='links'>
        <Link to="./routes/about">About</Link>
        <Link to="./routes/contact">Contact</Link>
        <a href='https://linkedin.com'>LinkedIn</a>
      </div>
    </div>
  </header>
);
