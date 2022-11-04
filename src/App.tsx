import React from 'react';
import './App.css';
import ResultsWindow from './components/ResultsWindow/ResultsWindow';

function App() {
    return (
        <div id='calculator-background' className='background'>
            <div id='calculator-body' className='calculator'>
                <ResultsWindow />
            </div>
        </div>
    );
}

export default App;
