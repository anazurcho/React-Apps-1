import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextComponent from './context/authContext';
import GetCategories from './context/getCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/index.css';

import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE_CENTER,
  timeout: 2000,
  offset: '30px',
  type: types.ERROR,
  // you can also just use 'scale'
  transition: transitions.FADE
}


ReactDOM.render(
  <React.StrictMode>
    <AuthContextComponent>
      <GetCategories>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </GetCategories>
    </AuthContextComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
