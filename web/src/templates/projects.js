import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/organisms/seo';
import LanguageSwitch from '../components/molecules/languageSwitch';

const Projects = () => (
  <>
    <SEO siteTitle="Project" />
    <div>
      <LanguageSwitch />
      <h1>Projects</h1>
      <Link to="/projects/">Projects Overview</Link>
    </div>
  </>
);

Projects.propTypes = {};

export default Projects;
