import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, navigate } from 'gatsby';
import { useConsole } from '../hooks/useConsole';
import SEO from '../components/organisms/seo';
import RichText from '../components/atoms/richtext';
import LanguageSwitch from '../components/molecules/languageSwitch';
import { LayoutContext } from '../components/organisms/layoutProvider';

const IndexPage = ({ data }) => {
  useConsole();
  const { language, theme, toggleTheme } = useContext(LayoutContext);

  const { title, _rawDescription } = data.homepage.nodes[0];
  const postTitle = data.post.nodes[0].title;

  useEffect(() => {
    navigate(language === 'en' ? '/' : '/de');
  }, [language]);

  return (
    <>
      <SEO />
      <Link to="/legal">Legal</Link>
      <h1>{title}</h1>
      <RichText blocks={_rawDescription} />
      <LanguageSwitch />
      <p>{postTitle[language]}</p>
      <button type="button" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
      <div className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat
        exercitationem consequatur.
      </div>
    </>
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
    post: allSanityBlogPost {
      nodes {
        title {
          de
          en
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
