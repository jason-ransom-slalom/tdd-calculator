import { render } from '@testing-library/react';
import ResultsWindow from './ResultsWindow';

describe('ResultsWindows', () => {
    it('renders a paragraph element', () => {
        const { container } = render(<ResultsWindow />);

        expect(container.getElementsByTagName('p')[0]).toBeInTheDocument();
    });
});
