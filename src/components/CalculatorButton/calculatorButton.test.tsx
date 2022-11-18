import { render, fireEvent } from '@testing-library/react';
import CalculatorButton from "./CalculatorButton";

const onClick = jest.fn();

describe('CalculatorButton displays the provided value of 1', () => {
    it('exists', () => {
        const { container } = render(
            <CalculatorButton value={1} clickCalculatorButton={onClick}/>
        );

        expect(container).toBeInTheDocument();
    });

    it('displays the provided value of  2', () => {
        const value = 2;
        const { getByText } = render(
            <CalculatorButton value={2} clickCalculatorButton={onClick}/>
        );

        getByText(value);
    });

    it('displays the provided value of +', () => {
        const value = '+';
        const { getByText } = render(
            <CalculatorButton value={'+'} clickCalculatorButton={onClick}/>
        );

        getByText(value);
    });

    it('execute the onclick function when clicked', () => {

        const value = '+';
        const { getByText } = render(
            <CalculatorButton value={'+'} clickCalculatorButton={onClick}/>
        );

        const elem = getByText(value);
        fireEvent.click(elem);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('calls the onClick with the provided value', () => {
        const value = '+';
        const { getByText } = render(
            <CalculatorButton value={value} clickCalculatorButton={onClick}/>
        );

        const elem = getByText('+');
        fireEvent.click(elem);
        expect(onClick).toHaveBeenCalledWith(value);
    });
});
