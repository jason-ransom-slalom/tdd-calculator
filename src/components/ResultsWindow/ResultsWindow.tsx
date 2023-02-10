import {FC} from 'react';

interface ResultsWindowProps {
    value: string | number;
}

const ResultsWindow: FC<ResultsWindowProps> = ({value}) => {
    return <p id='resultsWindow' role='resultsWindow' className='results-window'>{value}</p>;
}

export default ResultsWindow;
