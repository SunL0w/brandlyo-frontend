import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import Generator from './components/Generator';

const brandName = "Brandlyo";

function App() {
  return (
    <div>
      <Router>
        <Header brandName={brandName} />
        <Routes>
          <Route path="/" element={<LanguageSelector />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
        {/* Ici, le contenu de la page et le footer */}
      </Router>
    </div>
  );
}

export default App;
