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
  const [brandWords, setBrandWords] = useState("None");
  const [brandLanguage, setBrandLanguage] = useState("English");
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [brandStyle, setBrandStyle] = useState([]);
  const [brandCreativity, setBrandCreativity] = useState("");
  const [selectedCreativity, setSelectedCreativity] = useState("");
  const [brandPersonalitie, setBrandPersonalitie] = useState("None");
  const [brandEpoch, setBrandEpoch] = useState("None");

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
        if (brandDescription === "") {
          setBrandDescription("None");
        }
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
    } else if (step === 4) {
      if (!selectedCreativity) {
        // mettre le fond du bouton en rouge si aucun choix n'est sélectionné
        setHasError(true);
      } else {
        // L'utilisateur a bien entré quelque chose, pas d'erreur
        setHasError(false);
        // Mettre à jour brand_creativity avec le choix sélectionné
        setBrandCreativity(selectedCreativity);
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
      // Envoyez les données au back-end et gérer la réponse
      const response = await axios.post("https://the-backend-api.com/generate", {
        brandKeyword,
        brandDescription,
        brandMaxLength,
        brandMinLength,
        brandNbrSyllables,
        brandWords,
        brandLanguage,
        brandStyle,
        brandCreativity,
        brandPersonalitie,
        // autres paramètres
      });
  // Traitez la réponse et affichez les résultats
    } catch (error) {
      // Gérez les erreurs
    }
  };

  // Gestion des choix de l'utilisateur
  const handleChoiceChange = (choice) => {
    if (selectedChoices.includes(choice)) {
      setSelectedChoices(selectedChoices.filter((item) => item !== choice));
    } else {
      setSelectedChoices([...selectedChoices, choice]);
    }
  };  

  // Liste des choix du style
  const styleChoices = [
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

  // Liste des choix de créativité
  const creativityChoices = [
    "Innovateur",
    "Révolutionnaire",
    "Visionnaire",
    "Ingénieux",
    "Inspiré",
    "Créatif",
    "Intuitif",
    "Fantaisiste",
    "Original",
    "Unique",
    "Surprenant",
    "Nouveau",
    "Progressif",
    "Novateur",
    "Pionnier",
    "Évolutif",
    "Progressiste",
    "Nouvelle vague",
    "Disruptif",
    "Audacieux",
  ];  

  // Liste des personnalités
  const personalityChoices = [
    "None",
    "Albert Einstein",
    "Marie Curie",
    "Salvador Dalí",
    "Frida Kahlo",
    "Walt Disney",
    "Bill Gates",
    "Oprah Winfrey",
    "Warren Buffett",
    "J.K. Rowling",
    "Mark Zuckerberg",
    "Tim Cook",
    "Jeff Bezos",
    "Richard Branson",
    "Elon Musk",
    "Barack Obama",
    "Malala Yousafzai",
    "Nelson Mandela",
    "Winston Churchill",
    "Mother Teresa",
    "Mahatma Gandhi",
    "Charlie Chaplin",
    "Louis de Funès",
    "Jerry Lewis",
    "Buster Keaton",
    "Jacques Tati",
    "Jim Carrey",
    "Eddie Murphy",
    "Robin Williams",
    "Will Ferrell",
    "Tina Fey",
    "Harry Potter",
    "Frodon Sacquet",
    "Katniss Everdeen",
    "Luke Skywalker",
    "Sherlock Holmes",
    "James Bond",
    "Lara Croft",
    "Indiana Jones",
    "Tony Stark (Iron Man)",
    "Wonder Woman",
    "Dark Vador (Star Wars)",
    "Gandalf (Le Seigneur des Anneaux)",
    "Dumbledore (Harry Potter)",
    "Yoda (Star Wars)",
    "Aragorn (Le Seigneur des Anneaux)",
    "Hermione Granger (Harry Potter)",
    "Obi-Wan Kenobi (Star Wars)",
    "Legolas (Le Seigneur des Anneaux)",
    "Ron Weasley (Harry Potter)",
    "Han Solo (Star Wars)",
  ];

  // Liste des époques
  const epochChoices = [
    "None",
    "Antique",
    "Médiévale",
    "Baroque tardif",
    "Rococo",
    "Néo-classique",
    "Art nouveau",
    "Art déco",
    "Pop art",
    "Postmodernisme",
    "Art contemporain",
    "Années 50",
    "Années 60",
    "Années 70",
    "Années 80",
    "Années 90",
    "Années 2000",
    "Années 2010",
    "Années 2020",
    "Post-apocalyptique",
    "Science-fiction"
  ];

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
          return (
            <div className="dialog-box">
              <h3>Choose style</h3>
              <div className="choices-container">
                {styleChoices.map((choice) => (
                  <div key={choice} className="choice">
                    <input
                      type="radio"
                      name="style"
                      id={choice}
                      checked={selectedChoices.includes(choice)}
                      onChange={() => handleChoiceChange(choice)}
                    />
                    <label htmlFor={choice}>{choice}</label>
                  </div>
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
            case 4:
              return (
                <div className="dialog-box">
                  <h3>Choose creativity filter</h3>
                  <div className="choices-container">
                    {creativityChoices.map((choice) => (
                      <div key={choice} className="choice">
                        <input
                          type="radio"
                          name="creativity"
                          id={choice}
                          checked={selectedCreativity === choice}
                          onChange={() => setSelectedCreativity(choice)}
                        />
                        <label htmlFor={choice}>{choice}</label>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`next-button${hasError ? " error" : ""}`}
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              ); 
              case 5:
                return (
                  <div className="dialog-box">
                    <h3>Choose a personalitie</h3>
                    <div className="choices-container">
                      {personalityChoices.map((choice) => (
                        <div key={choice} className="choice">
                          <input
                            type="radio" 
                            name="personalitie" // Add a name attribute
                            id={choice}
                            checked={brandPersonalitie === choice}
                            onChange={() => setBrandPersonalitie(choice)}
                          />
                          <label htmlFor={choice}>{choice}</label>
                        </div>
                      ))}
                    </div>
                    <button
                      className="next-button"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                );
                case 6:
                  return (
                    <div className="dialog-box">
                      <h3>Choose the epoch</h3>
                      <div className="choices-container">
                        {epochChoices.map((choice) => (
                          <div key={choice} className="choice">
                            <input
                              type="radio"
                              name="epoch"
                              id={choice}
                              checked={brandEpoch === choice}
                              onChange={() => setBrandEpoch(choice)}
                            />
                            <label htmlFor={choice}>{choice}</label>
                          </div>
                        ))}
                      </div>
                      <button className="next-button" onClick={handleNext}>
                        Next
                      </button>
                    </div>
                  );                                                           
      // Les autres boîtes de dialogue si il y des étapes à ajouter
      case 7:
        return (
          <div className="dialog-box">
            <h3>Summary of choices</h3>
            <ul>
              <li>Brand keywords (activity sectors): {brandKeyword}</li>
              <li>Business description: {brandDescription}</li>
              <li>
                Maximum and minimum length of the company name: <br />
                MIN: {brandMinLength} <br />
                MAX: {brandMaxLength}
              </li>
              <li>Number of syllables in the name: {brandNbrSyllables}</li>
              <li>Words you want to include in name: {brandWords}</li>
              <li>Language: {brandLanguage}</li>
              <li>Styles: {brandStyle.join(", ")}</li>
              <li>Creativity Filters: {brandCreativity}</li>
              <li>Personalities: {brandPersonalitie}</li>
              <li>Epochs: {brandEpoch}</li>
            </ul>
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
