//Import react and react-dom

import React from "react";
import ReactDOM from 'react-dom';
import Fuze from './components/Fuze';

//create a react "functional" component

const App = () => {
  return <Fuze />
};

// show the  above react component on screen

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);