module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `psbin72dqapz`,
        accessToken: `50d77896459e6664e69db89a5ac8e1aab7f97456aac66d89c73468963b005776`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`],
};
