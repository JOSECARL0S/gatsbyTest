import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import './dog-post.css';

const DogPost = ({ data }) => {
  const dog = data.contentfulDog;
  const { name, image, description } = dog;
  return (
    <div>
      <h1>{name}</h1>
      {description ? (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      ) : null}
      <Img resolutions={image[0].resolutions} />


      <Link to="/">zurück</Link>


    </div>
  )
}


DogPost.propTypes = {
  data: PropTypes.object.isRequired,
};
export default DogPost;

export const pageQuery = graphql`
  query dogPostQuery($slug: String!) {
        contentfulDog(slug: {eq: $slug }) {
        name
      image {
        resolutions {
      src
    }
  }
      description {
        childMarkdownRemark {
      html
    }
  }
}
}
`;
