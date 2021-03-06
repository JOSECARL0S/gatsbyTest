import React from 'react';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';

const Header = () => (
  <div
    style={{
      background: 'salmon',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {config.siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
