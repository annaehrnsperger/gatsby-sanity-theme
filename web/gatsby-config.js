import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `A blank theme for Gatsby.`,
    author: `Anna Ehrnsperger`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'v0ftq7z1',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
