import { FC } from 'react';

interface CalculatorButtonProps {
    value: number | string;
    clickCalculatorButton: () => void;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({ value,  clickCalculatorButton }) => {
    return <button onClick={clickCalculatorButton}>{value}</button>;
};

export default CalculatorButton;