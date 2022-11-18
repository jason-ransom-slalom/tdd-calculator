import React from 'react';
import './App.css';
import ResultsWindow from './components/ResultsWindow/ResultsWindow';
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";
import {BUTTON_VALUE_LIST} from "./app.constants";

function App() {

    const clickCalculatorButton = () => {

    }

    const returnCalculatorButton = () =>
        BUTTON_VALUE_LIST.map(buttonValue =>
            <CalculatorButton value={buttonValue} clickCalculatorButton={clickCalculatorButton}/>
        );

    return (
        <div id='calculator-background' className='background'>
            <div id='calculator-body' className='calculator'>
                <ResultsWindow/>
                <div id='button-body'>
                    {
                        returnCalculatorButton()
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
