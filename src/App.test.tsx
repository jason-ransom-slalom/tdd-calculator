import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the calculator background', () => {
    const { container } = render(<App />);

    expect(container.querySelector('#calculator-background')).toBeInTheDocument();
  });

  it('renders a calculator frame', () => {
    const { container } = render(<App />);

    expect(container.querySelector('#calculator-body')).toBeInTheDocument();
  });
});
