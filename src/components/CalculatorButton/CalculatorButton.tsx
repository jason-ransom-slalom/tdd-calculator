import {FC} from 'react';

interface CalculatorButtonProps {
    value: string;
    clickCalculatorButton: (value: string) => void;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({value, clickCalculatorButton}) => {
    return <button onClick={() => {
        clickCalculatorButton(value)
    }}>{value}</button>;
};

export default CalculatorButton;