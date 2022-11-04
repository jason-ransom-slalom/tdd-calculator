import React from 'react';
import { render, within } from '@testing-library/react';
import App from './App';

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
  })

})

