//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
//import './globalStyles.css';

const brandName = "Brandlyo";

function App() {
  return (
    <div>
      <Header brandName={brandName} />
      <LanguageSelector />
      {/* Ici, ajouter le contenu de la page et le footer */}
    </div>
  );
}

export default App;
