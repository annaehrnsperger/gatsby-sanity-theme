import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectsPage = ({ data }) => {
  const { title } = data.projectsPage.nodes[0];

  return (
    <Layout>
      <SEO siteTitle="Projects" />
      <h2>{title}</h2>
    </Layout>
  );
};

export const query = graphql`
  query Projects {
    projectsPage: allSanityProjectsPage {
      nodes {
        title
        projects {
          title
          slug {
            current
          }
          images {
            image {
              asset {
                fluid(maxWidth: 3600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

ProjectsPage.propTypes = {
  data: PropTypes.object,
};

export default ProjectsPage;
