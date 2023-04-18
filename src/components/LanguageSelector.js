import React, { useState } from 'react';
import { Dialog } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleFlagClick = () => {
    setIsOpen(false);
    navigate('/generator');
  };

  return (
    <div className="language-selector">
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="language-selector-dialog"
      >
        <div className="language-selector-content">
          <div className="language-selector-dialog-flex">
            <div className="language-selector-dialog-text">
              Choose the language - Choisir la langue
            </div>
            <div className="language-selector-dialog-flags">
              <div className="language-option" onClick={handleFlagClick}>
                <img
                  src={`${process.env.PUBLIC_URL}/Items-ui/english-flag.png`}
                  alt="English"
                  className="language-flag"
                />
                <span className="language-text">English</span>
              </div>
              <div className="language-option" onClick={handleFlagClick}>
                <img
                  src={`${process.env.PUBLIC_URL}/Items-ui/french-flag.png`}
                  alt="Français"
                  className="language-flag"
                />
                <span className="language-text">Français</span>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LanguageSelector;
