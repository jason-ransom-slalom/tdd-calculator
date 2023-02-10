import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {BUTTON_VALUE_LIST} from "./app.constants";
import resultsWindow from "./components/ResultsWindow/ResultsWindow";

describe('App', () => {
    it('renders the calculator background', () => {
        const {container} = render(<App/>);

        expect(container.querySelector('#calculator-background')).toBeInTheDocument();
    });

    it('renders a calculator frame', () => {
        const {container} = render(<App/>);

        expect(container.querySelector('#calculator-body')).toBeInTheDocument();
    });

    it('renders a ResultsWindow within the calculator body', () => {
        const {container} = render(<App/>);

        // container.getElementsByTagName('p')[0]
        const calculatorBody = container.querySelector('#calculator-body') as HTMLElement;
        expect(calculatorBody.getElementsByTagName('p')[0]).toBeInTheDocument();
    });

    describe('calculator frame', () => {
        it.skip('positions results window at the top of the frame', () => {
            const {container} = render(<App/>);

            const calculatorBody = container.querySelector('#calculator-body') as HTMLElement;
            expect(calculatorBody).toHaveStyle(' background-color: black');
        });
    });

    describe('calculator button array', () => {
        it('should contain 20 buttons', () => {
            const {getAllByRole} = render(<App/>);
            const buttons = getAllByRole('button');
            expect(buttons.length).toEqual(20);
        });

        it('should contain 1 of each button', () => {
            const arrayOfExpectedButtons = BUTTON_VALUE_LIST;
            const {getByText} = render(<App/>);

            arrayOfExpectedButtons.forEach(buttonText => {
                // ignoring blank button text values
                buttonText ?? getByText(buttonText);
            });
        });
    });

    describe('calculator input', () => {
        it('adds a value to results window when a number button is clicked', () => {
            const {getByText, getByRole} = render(<App/>);
            const numberOneButton = getByText('1');
            fireEvent.click(numberOneButton);

            const resultsWindow = getByRole('resultsWindow');
            expect(resultsWindow.innerHTML).toBe('1');
        });

        it('combines input on multiple number key clicks', () => {
            const {getByText, getByRole} = render(<App/>);
            const numberOneButton = getByText('1');
            fireEvent.click(numberOneButton);
            fireEvent.click(numberOneButton);

            const resultsWindow = getByRole('resultsWindow');
            expect(resultsWindow.innerHTML).toBe('11');
        });
    });
});
