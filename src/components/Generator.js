// src/components/Generator.js
import React, { useState } from "react";
import axios from 'axios';

function Generator() {
  // États pour chaque champ de saisie
  const [brandKeyword, setBrandKeyword] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  // autres états

  // États pour gérer l'affichage des boîtes de dialogue
  const [step, setStep] = useState(1);

  // Gestion du statut des erreurs
  const [hasError, setHasError] = useState(false);

  // Gestionnaires d'événements pour les boutons "Next"
  const handleNext = () => {
    if (!brandKeyword) {
      // mettre le tour du champ en rouge si rien n'est entré
      setHasError(true);
    } else {
      // L'utilisateur à bien entré quelque-chose dans le champ, pas d'erreur
      setHasError(false);
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
        // autres paramètres
      });
  // Traitez la réponse et affichez les résultats
    } catch (error) {
      // Gérez les erreurs
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
      // case 2, 3, 4, etc. pour les autres boîtes de dialogue
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
