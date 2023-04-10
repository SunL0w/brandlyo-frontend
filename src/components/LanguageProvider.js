import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import FrenchMessages from '../translations/fr.json';
import EnglishMessages from '../translations/en.json';

const messages = {
  fr: FrenchMessages,
  en: EnglishMessages,
};

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('fr');

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
