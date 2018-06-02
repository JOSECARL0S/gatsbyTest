import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const DogPost = ({ node }) => (
  <div className="dogPost">
    <Link to={node.slug}>
      <Img resolutions={node.image[0].responsiveResolution} />
    </Link>
    <div className="innerContent">
      <Link to={node.slug}>{node.name}</Link>
      <span>Geschlecht: {node.sex}</span>
      <span>Rasse: {node.breed}</span>
      <Link to={node.slug}>mehr erfahren</Link>
    </div>
  </div>
);

const IndexPage = ({ data }) => (
  <div style={{
    display: 'grid',
    gridGap: '20px',
    // gridTemplateColumns: "repeat(auto-fit, minmax('150px, 1fr'))"
    // gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  }}>
    {data.allContentfulDog.edges.map(edge => <DogPost key={edge.node.id} node={edge.node} />)}
  </div>
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
            responsiveResolution (height: 250) {
              src
            }
          }
        }
      }
    }
  }
`;
