/*

	Tocara Descargar React-Router

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Micuenta from './Micuenta'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Acá van todos los redireccionamientos de página (sing in->menú principal de la app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Main" exact element ={<App />} />
      <Route path="/micuenta" element={<Micuenta />} />
    </Routes>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
