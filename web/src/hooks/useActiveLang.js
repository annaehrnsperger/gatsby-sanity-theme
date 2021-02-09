import { useClientSide } from './useClientSide';
import { languages, defaultLang } from '../components/atoms/languages';

export const useActiveLang = () => {
  const isClient = useClientSide();
  const language =
    isClient && window.location.pathname.split('/')[1].replace('/', '');
  const activeLanguage = languages.includes(language) ? language : defaultLang;

  return activeLanguage;
};
