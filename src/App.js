import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import HomePage from './pages/HomePage';
import KeywordInputPage from './pages/KeywordInputPage';
import ActivitySelectionPage from './pages/ActivitySelectionPage';
import AdvancedSettingsPage from './pages/AdvancedSettingsPage';
import NameGenerationPage from './pages/NameGenerationPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import DashboardPage from './pages/DashboardPage';
import LanguageSelection from './pages/LanguageSelection';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="logo">
                <img src={logo} alt="Logo" />
              </Menu.Item>
              <Menu.Item key="1">Brandly</Menu.Item>
              <Menu.Item key="2">Generateur</Menu.Item>
              <Menu.Item key="3" style={{ float: 'right' }}>
                Dashboard
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ backgroundColor: 'grey' }}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/keyword-input" element={<KeywordInputPage />} />
              <Route path="/activity-selection" element={<ActivitySelectionPage />} />
              <Route path="/advanced-settings" element={<AdvancedSettingsPage />} />
              <Route path="/name-generation" element={<NameGenerationPage />} />
              <Route path="/login-register" element={<LoginRegisterPage />} />
  <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
            <LanguageSelection />
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;