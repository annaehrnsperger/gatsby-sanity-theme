import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useActiveLang } from '../../hooks/useActiveLang';

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const activeLang = useActiveLang();

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const [language, setLanguage] = useState(activeLang);

  // const [navOpen, setNavOpen] = useState(false);
  return (
    <LayoutContext.Provider
      value={{ theme, toggleTheme, language, setLanguage }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node,
};

export default LayoutProvider;

// USAGE
// const { theme, toggleTheme } = useContext(LayoutContext);

//   return (
//     <div>
//       <div>Hi friend!</div>
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'dark' : 'light'} mode
//       </button>
//     </div>
//   );
