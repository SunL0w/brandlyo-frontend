import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
//import './globalStyles.css';

const brandName = "Brandly";

function App() {
  return (
    <div>
      <Header brandName={brandName} />
      {/* Ici, vous pouvez ajouter le contenu de la page et le footer */}
    </div>
  );
}

export default App;
