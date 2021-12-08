import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se página contém um heading com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');

    const notFound = screen.getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });

  test('Teste se página contém um heading com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste2');

    const image = screen.getAllByRole('img');
    expect(image[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
