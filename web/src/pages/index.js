import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useConsole } from '../hooks/useConsole';
import Layout from '../components/organisms/layout';
import SEO from '../components/organisms/seo';
import RichText from '../components/atoms/richtext';

const IndexPage = ({ data }) => {
  useConsole();

  const { title, _rawDescription } = data.homepage.nodes[0];

  return (
    <Layout>
      <SEO />
      <h1>{title}</h1>
      <RichText blocks={_rawDescription} />
    </Layout>
  );
};

export const query = graphql`
  query Homepage {
    homepage: allSanityHomepage {
      nodes {
        title
        _rawDescription
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
