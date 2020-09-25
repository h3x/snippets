import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyD5OIMDLLSbevDBbVFb-nJsQVaVcAD6RpE",
  authDomain: "snipets-c2e71.firebaseapp.com",
  databaseURL: "https://snipets-c2e71.firebaseio.com",
  projectId: "snipets-c2e71",
  storageBucket: "snipets-c2e71.appspot.com",
  messagingSenderId: "334381642970",
  appId: "1:334381642970:web:b2b71cdb9f9a832a1561e3",
  measurementId: "G-K7FFJ5ZVP9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
