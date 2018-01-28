import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {
        // const {
            //productName: { productName }
        //} = this.props.data.contentfulProduct

        const product = this.props.data.contentfulProduct
        const {
            productName: { productName },
            productDescription,
            price,
            image,
            brand,
            categories,
        } = product

        return (
            <div>
                <h1>{productName}</h1>
                <div
            dangerouslySetInnerHTML={{
              __html: productDescription.childMarkdownRemark.html,
            }}
/>
            </div>
        )
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}
export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulProduct(slug: {eq: $slug}) {
            slug
            productName {
                productName
            }
            productDescription {
                childMarkdownRemark {
                  html
                }
              }
            image {
                responsiveResolution(width: 100) {
                  width
                  height
                  src
                  srcSet
                }
            }
        }
    }
`