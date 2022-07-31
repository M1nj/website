import React from 'react';
import PropTypes from 'prop-types';

import './article.css';

export const Article = ({ size, label, icon, url, ...props }) => {

  return (
    <div  className={['article', `button--${size}`, `${icon}`].join(' ')}>
      <div className='grey-100' style={{height: 300 +'px'}}></div>
      <div className='--xxl'>
        <div className='introduction'>
          <h2>Test</h2>
          <p className='subtitle'>Test</p>
        </div>
        
      </div>
    </div>
  )
};

Article.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['noShow', 'show']),
  url: PropTypes.string,

};

Article.defaultProps = {
  label: 'Project Title',
  icon: 'show',
  url: 'arrow-right',
};

