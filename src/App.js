import React from 'react';
import logo from './logo.svg';
import './App.css';

//import  { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import KeywordInputPage from './pages/KeywordInputPage';
import ActivitySelectionPage from './pages/ActivitySelectionPage';
import AdvancedSettingsPage from './pages/AdvancedSettingsPage';
import NameGenerationPage from './pages/NameGenerationPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
      {/* Le reste de votre code ici */}
      </header>

      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/keyword-input" component={KeywordInputPage} />
        <Route path="/activity-selection" component={ActivitySelectionPage} />
        <Route path="/advanced-settings" component={AdvancedSettingsPage} />
        <Route path="/name-generation" component={NameGenerationPage} />
        <Route path="/login-register" component={LoginRegisterPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Routes>
    </div>
  );
}

export default App;
