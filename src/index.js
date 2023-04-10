import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import darkTheme from '@ant-design/dark-theme'; // Importe le thème sombre d'Ant Design
import './theme-overrides.less';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { LanguageProvider } from './components/LanguageProvider';

// Créez le store Redux en utilisant le rootReducer et le middleware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
