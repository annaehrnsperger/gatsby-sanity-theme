import React, { useContext } from 'react';
import styled from 'styled-components';
import RadioButton from '../atoms/radioButton';
import { LayoutContext } from '../organisms/layoutProvider';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LayoutContext);

  return (
    <StyledLanguageSwitcher>
      <RadioButton
        value="en"
        onChange={(e) => setLanguage(e.target.value)}
        label="English"
        checked={language === 'en'}
        style={{ color: language === 'en' && 'blue' }}
      />
      <RadioButton
        value="de"
        onChange={(e) => setLanguage(e.target.value)}
        label="Deutsch"
        checked={language === 'de'}
        style={{ color: language === 'de' && 'blue' }}
      />
    </StyledLanguageSwitcher>
  );
};

const StyledLanguageSwitcher = styled.form``;

export default LanguageSwitch;
