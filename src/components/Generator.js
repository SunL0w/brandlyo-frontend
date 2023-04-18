// src/components/Generator.js
import React, { useState } from "react";
import axios from 'axios';

function Generator() {
  // États pour chaque champ de saisie
  const [brandKeyword, setBrandKeyword] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [brandMaxLength, setBrandMaxLength] = useState(8);
  const [brandMinLength, setBrandMinLength] = useState(7);
  const [brandNbrSyllables, setBrandNbrSyllables] = useState(2);
  const [brandWords, setBrandWords] = useState("");
  const [brandLanguage, setBrandLanguage] = useState("English");
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [brandStyle, setBrandStyle] = useState([]);
  // autres états

  // États pour gérer l'affichage des boîtes de dialogue
  const [step, setStep] = useState(1);

  // Gestion du statut des erreurs
  const [hasError, setHasError] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!brandKeyword) {
        // mettre le tour du champ en rouge si rien n'est entré
        setHasError(true);
      } else {
        // L'utilisateur à bien entré quelque-chose dans le champ, pas d'erreur
        setHasError(false);
        // enregistrer les paramètres dans Redux
        setStep(step + 1);
      }
    } else if (step === 3) {
      if (selectedChoices.length === 0) {
        // mettre le fond du bouton en rouge si aucun choix n'est sélectionné
        setHasError(true);
      } else {
        // L'utilisateur a bien entré quelque chose, pas d'erreur
        setHasError(false);
        // Mettre à jour brand_style avec les choix sélectionnés
        setBrandStyle(selectedChoices);
        // enregistrer les paramètres dans Redux
        setStep(step + 1);
      }
    } else {
      // enregistrer les paramètres dans Redux
      setStep(step + 1);
    }
  };
  

  // Gestionnaire d'événements pour le bouton "Generate"
  const handleGenerate = async () => {
    try {
      // Envoyez les données au back-end et gérez la réponse
      const response = await axios.post("https://the-backend-api.com/generate", {
        brandKeyword,
        brandDescription,
        brandMaxLength,
        brandMinLength,
        brandNbrSyllables,
        brandWords,
        brandLanguage,
        brandStyle,
        // autres paramètres
      });
  // Traitez la réponse et affichez les résultats
    } catch (error) {
      // Gérez les erreurs
    }
  };

  // Gestion des choix de l'utilisateur pour les checkbox
  const handleChoiceChange = (choice) => {
    if (selectedChoices.includes(choice)) {
      setSelectedChoices(selectedChoices.filter((item) => item !== choice));
    } else {
      setSelectedChoices([...selectedChoices, choice]);
    }
  };  

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          <div className="dialog-box">
            <input
              className={`input-field${hasError ? " error" : ""}`}
              type="text"
              placeholder="Brand keywords (with comma)"
              value={brandKeyword}
              onChange={(e) => setBrandKeyword(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Business description (optional)"
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
            />
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        );
        case 2:
          return (
            <div className="dialog-box">
              <label>
                Enter maximum length of the company name:
                <input
                  className="input-field"
                  type="number"
                  value={brandMaxLength}
                  onChange={(e) => setBrandMaxLength(e.target.value)}
                />
              </label>
              <label>
                Enter minimum length of the company name:
                <input
                  className="input-field"
                  type="number"
                  value={brandMinLength}
                  onChange={(e) => setBrandMinLength(e.target.value)}
                />
              </label>
              <label>
                Enter number of syllables in the name:
                <input
                  className="input-field"
                  type="number"
                  value={brandNbrSyllables}
                  onChange={(e) => setBrandNbrSyllables(e.target.value)}
                />
              </label>
              <label>
                Enter type of words you want to include (e.g. nouns, adjectives, verbs, etc):
                <input
                  className="input-field"
                  type="text"
                  value={brandWords}
                  onChange={(e) => setBrandWords(e.target.value)}
                />
              </label>
              <label>
                Enter language in which you want to generate the name:
                <input
                  className="input-field"
                  type="text"
                  value={brandLanguage}
                  onChange={(e) => setBrandLanguage(e.target.value)}
                />
              </label>
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            </div>
          );
          case 3:
            const choices = [
              "Vintage",
              "Artisanal",
              "Contemporain",
              "Moderne classique",
              "Minimaliste japonais",
              "Shabby chic",
              "Bohème",
              "Country chic",
              "Mid-century moderne",
              "Hollywood regency",
              "Glamour",
              "Rétro-futuriste",
              "Cyberpunk",
              "Steampunk",
              "Punk rock",
              "Gothique",
              "Hipster",
              "Skater",
              "Surfer",
              "Urbain",
            ];
          
            return (
              <div className="dialog-box">
                <div className="choices-container">
                  {choices.map((choice, index) => (
                    <label key={index} className="choice">
                      <input
                        type="checkbox"
                        checked={selectedChoices.includes(choice)}
                        onChange={() => handleChoiceChange(choice)}
                      />
                      {choice}
                    </label>
                  ))}
                </div>
                <button
                  className={`next-button${selectedChoices.length === 0 ? " error" : ""}`}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            );                  
      // case 3, 4, etc. pour les autres boîtes de dialogue
      case 6:
        return (
          <div className="dialog-box">
            {/* Résumé des choix */}
            <button className="next-button" onClick={handleGenerate}>
              Generate
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="generator-container">{renderStep(step)}</div>;
}

export default Generator;
