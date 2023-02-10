import React, {useState} from 'react';
import './App.css';
import ResultsWindow from './components/ResultsWindow/ResultsWindow';
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";
import {BUTTON_VALUE_LIST} from "./app.constants";

function App() {
    const [renderValue, setRenderValue] = useState<string>('0');

    const clickCalculatorButton = (value: string) => {
        if (renderValue === '0') {
            setRenderValue(value);
        } else {
            setRenderValue(renderValue + value);
        }
    }

    const renderCalculatorButtons = () =>
        BUTTON_VALUE_LIST.map((buttonValue, idx) =>
            <CalculatorButton key={`${idx}-${buttonValue}`} value={buttonValue}
                              clickCalculatorButton={clickCalculatorButton}/>
        );

    return (
        <div id='calculator-background' className='background'>
            <div id='calculator-body' className='calculator'>
                <ResultsWindow value={renderValue}/>
                <div id='button-body'>
                    {renderCalculatorButtons()}
                </div>
            </div>
        </div>
    );
}

export default App;
