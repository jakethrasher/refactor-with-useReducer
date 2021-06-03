import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    render(<App />);

    const display = screen.getByTestId('display');
    const color = screen.getByRole('color');

    fireEvent.input(color, { target: { value: '#0040ff' } });

    expect(display).toHaveStyle({ 'background-color':'#0040ff' });

    const undo = screen.getByText('undo');
    fireEvent.click(undo);
    expect(display).toHaveStyle({ 'background-color': '#FF0000' });

  });
});
