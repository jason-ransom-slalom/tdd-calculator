import React from 'react';
import './App.css';
import ResultsWindow from './components/ResultsWindow/ResultsWindow';
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";

function App() {

    const clickCalculatorButton = () => {

    }

    return (
        <div id='calculator-background' className='background'>
            <div id='calculator-body' className='calculator'>
                <ResultsWindow />
                <div id='button-body'>
                    <CalculatorButton value={1} clickCalculatorButton={clickCalculatorButton}/>
                    <CalculatorButton value={2} clickCalculatorButton={clickCalculatorButton}/>
                </div>
            </div>
        </div>
    );
}

export default App;
