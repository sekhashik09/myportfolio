import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Language.css';

const languages = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/in.svg' },
  { code: 'hi', label: 'हिन्दी', flag: 'https://flagcdn.com/in.svg' },
  { code: 'bn', label: 'বাংলা', flag: 'https://flagcdn.com/in.svg' },
  { code: 'ta', label: 'தமிழ்', flag: 'https://flagcdn.com/in.svg' },
  { code: 'te', label: 'తెలుగు', flag: 'https://flagcdn.com/in.svg' },
  { code: 'kn', label: 'ಕನ್ನಡ', flag: 'https://flagcdn.com/in.svg' },
  { code: 'ml', label: 'മലയാളം', flag: 'https://flagcdn.com/in.svg' },
  { code: 'mr', label: 'मराठी', flag: 'https://flagcdn.com/in.svg' },
  { code: 'gu', label: 'ગુજરાતી', flag: 'https://flagcdn.com/in.svg' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', flag: 'https://flagcdn.com/in.svg' },
  { code: 'od', label: 'ଓଡିଆ', flag: 'https://flagcdn.com/in.svg' },
  { code: 'as', label: 'অসমীয়া', flag: 'https://flagcdn.com/in.svg' },
  { code: 'bho', label: 'भोजपुरी', flag: 'https://flagcdn.com/in.svg' },
  { code: 'ur', label: 'اردو', flag: 'https://flagcdn.com/pk.svg' },
  { code: 'ne', label: 'नेपाली', flag: 'https://flagcdn.com/np.svg' },
  { code: 'si', label: 'සිංහල', flag: 'https://flagcdn.com/lk.svg' },

];

const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); 

  const changeLanguage = (lang) => {
    const selectedLang = languages.find((language) => language.code === lang);
    i18n.changeLanguage(lang);
    setSelectedLanguage(selectedLang);
    setIsOpen(false); 
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="language-dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.label}
          width="20"
          height="15"
          className="language-icon"
        />
        {selectedLanguage.label} 
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {languages.map((language) => (
            <div
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="dropdown-item"
            >
              <img
                src={language.flag}
                alt={language.label}
                width="20"
                height="15"
                className="language-icon"
              />
              {language.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
