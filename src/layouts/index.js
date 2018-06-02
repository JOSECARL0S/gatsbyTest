import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      {/* <link rel="canonical" href={`${config.siteUrl}`} /> */}
    </Helmet>
    {/* <SEO /> */}
    <Header />
    <div
      style={{
        margin: '20px'
      }}
    >
      {children()}
    </div>
  </div >
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper; 
