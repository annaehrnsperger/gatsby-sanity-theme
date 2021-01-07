import React from 'react';
import Layout from '../components/organisms/layout';
import SEO from '../components/organisms/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO siteTitle="404" />
    <p>Oh no! This page doesn't exist.</p>
  </Layout>
);

export default NotFoundPage;
