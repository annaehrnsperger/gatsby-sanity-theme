import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
import GlobalStyles from '../styles/GlobalStyles';
import Normalize from '../styles/Normalize';
import Variables from '../styles/Variables';

import Header from './header';
import Footer from './footer';
import Nav from './nav';

const Layout = ({ children }) => {
  const { settings } = useStaticQuery(graphql`
    query ColorsTitles {
      settings: allSanitySettings {
        nodes {
          textColor {
            hex
          }
          bgColor {
            hex
          }
        }
      }
    }
  `);

  const { textColor, bgColor } = settings.nodes[0];

  injectGlobal`
    :root {
    --text-color: ${textColor.hex};
    --bg-color: ${bgColor.hex};
  }
  `;

  return (
    <>
      {/**
       * Styles
       */}
      <Normalize />
      <GlobalStyles />
      <Variables />
      {/**
       * Content
       */}
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
