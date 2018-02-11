import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './dog-post.css';

class DogPost extends Component {
  render() {
    const dog = this.props.data.contentfulDog;
    const { name, image, description } = dog;

    return (
      <div>
        <h1>{name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
        <Img resolutions={image[0].resolutions} />
      </div>
    );
  }
}

DogPost.propTypes = {
  data: PropTypes.object.isRequired,
};
export default DogPost;

export const pageQuery = graphql`
  query dogPostQuery($slug: String!) {
    contentfulDog(slug: { eq: $slug }) {
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
