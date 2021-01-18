//Import react and react-dom

import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Fuze from './components/Fuze';

//create a react "functional" component

const App = () => {
  return <Fuze />
};

// take this react  component and show it on the screen

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);