import { FC } from 'react';

interface CalculatorButtonProps {
    value: number | string;
    clickCalculatorButton: (value: any) => void;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({ value,  clickCalculatorButton }) => {
    return <button onClick={() => { clickCalculatorButton(value) }}>{value}</button>;
};

export default CalculatorButton;