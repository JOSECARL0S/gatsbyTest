import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const DogPost = ({ node }) => (
  <li className="dogPost">
    <Link to={node.slug}>
      <Img resolutions={node.image[0].responsiveResolution} />
    </Link>
    <div className="innerContent">
      <Link to={node.slug}>{node.name}</Link>
      <span>Geschlecht: {node.sex}</span>
      <span>Rasse: {node.breed}</span>
      <Link to={node.slug}>mehr erfahren</Link>
    </div>
  </li>
);

const IndexPage = ({ data }) => (
  <ul>
    {data.allContentfulDog.edges.map(edge => <DogPost key={edge.node.id} node={edge.node} />)}
  </ul>
);

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulDog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          name
          sex
          breed
          slug
          image {
            responsiveResolution {
              src
            }
          }
        }
      }
    }
  }
`;
