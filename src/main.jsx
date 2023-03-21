import React from 'react'
import ReactDOM from 'react-dom/client'; 

//import { CalculatorApp } from './CalculatorApp';
//import { CounterApp } from './CounterApp';
import { LordOfTheRingsApp } from './LordOfTheRingsApp';


import './styles.css';

ReactDOM.createRoot ( document.getElementById( "root" )).render(
    <React.StrictMode>
        <LordOfTheRingsApp />
    </React.StrictMode>
    
)