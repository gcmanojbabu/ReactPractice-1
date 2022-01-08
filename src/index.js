import React from 'react';
import ReactDOM from 'react-dom';
import AppM from './AppM'
import AppF from './AppF'

// console.log(App);  // html in App converts to JSX by Bable 
ReactDOM.render(
  <React.StrictMode>
    <AppF />
    <br></br>
    <AppM />
  </React.StrictMode>,

  document.getElementById('root')
);

    // <AppF /> // from Source: Youtube freecodecamp - React Compoenent Lifecycle Hookes/Methodes
    // <AppM /> // from Source: Youtube.com / mike dane / React JS tutorial

