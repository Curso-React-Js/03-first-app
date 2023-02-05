import React from 'react';
import ReactDOM from 'react-dom/client'; // Para renderizar

// Componentes
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './styles.css';
import { CounterApp } from './CounterApp';

// Un componente
// const App = () => {
//   return (<h1>Hola Mundo!!!</h1>);
// }

// Forma de renderizar el componente en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title="Hola, Soy Goku" /> */}
    {/* <FirstApp title="Hola, Soy Vegeta" /> */}
    <CounterApp value={ 20 } />
  </React.StrictMode>
);