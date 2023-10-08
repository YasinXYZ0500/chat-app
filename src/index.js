import React from 'react';

// Shoping Cart prokect
// import AppCart from './AppCart.js';

import App from './App.js';

import { createRoot } from 'react-dom/client';
// import Web from './Site Project/App-Project.js'

import {BrowserRouter } from "react-router-dom"
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/* <AppCart/> */}
        <App/>
    </BrowserRouter>
);


