module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: `psbin72dqapz`,
        spaceId: `g1ihdswl9leo`,
        // accessToken: `50d77896459e6664e69db89a5ac8e1aab7f97456aac66d89c73468963b005776`,
        accessToken: `d80b684288865144ecbaac307729e67477b0dd6c90a782a102ba8cfa75d1afa4`
      }
    },
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-remark`
  ]
};
