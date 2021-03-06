import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import GlobalStyles from '../../styles/globalStyles';
import Normalize from '../../styles/normalize';
import Variables from '../../styles/variables';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import LayoutProvider from './layoutProvider';
import { ease } from '../../utils/easing';

const Layout = ({ children, location }) => {
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

  return (
    <LayoutProvider>
      {/**
       * Styles
       */}
      <Global
        styles={css`
          :root {
            --c-text: ${textColor.hex};
            --c-bg: ${bgColor.hex};
          }
        `}
      />
      <Normalize />
      <GlobalStyles />
      <Variables />
      {/**
       * Content
       */}
      <Header />
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      <motion.main
      // key={location && `key${location.pathname}`}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.4, ease: ease.outSmooth }}
      >
        {children}
      </motion.main>
      <Footer />
      {/* </AnimatePresence> */}
    </LayoutProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default Layout;
