import {render} from '@testing-library/react';
import ResultsWindow from './ResultsWindow';

describe('ResultsWindows', () => {
    it('renders a paragraph element', () => {
        const {container} = render(<ResultsWindow value={1}/>);

        expect(container.getElementsByTagName('p')[0]).toBeInTheDocument();
    });

    it('renders a paragraph element that contains provided value', () => {
        const value = 2;
        const {getByText} = render(<ResultsWindow value={value}/>);

        expect(getByText(value));
    })
});
