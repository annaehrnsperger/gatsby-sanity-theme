import React, { useContext } from 'react';
import styled from 'styled-components';
import RadioButton from '../atoms/radioButton';
import { LayoutContext } from '../organisms/layoutProvider';
import { languages, langNames } from '../atoms/languages';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LayoutContext);

  return (
    <StyledLanguageSwitcher>
      {languages.map((lang, i) => (
        <RadioButton
          key={i}
          value={lang}
          onChange={(e) => setLanguage(e.target.value)}
          label={langNames[i]}
          checked={language === lang}
          style={{ color: language === lang && 'blue' }}
        />
      ))}
    </StyledLanguageSwitcher>
  );
};

const StyledLanguageSwitcher = styled.form``;

export default LanguageSwitch;
