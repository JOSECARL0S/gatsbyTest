/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const dogPostTemplate = path.resolve('src/templates/dog-post.js');
    resolve(graphql(`
        {
          allContentfulDog(limit: 100) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulDog.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: dogPostTemplate,
            context: {
              slug: edge.node.slug,
            }
          });
        });
        return
      }));
  });
}; 
