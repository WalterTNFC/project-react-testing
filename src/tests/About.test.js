import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste do Componente About', () => {
  test('Teste se a página contém as informações sobre a Pokédex e um h2', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const aboutPokedex = screen.getByRole('heading', {
      level: 2,
      name: /about/i });
    expect(aboutPokedex).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const text1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(text1).toBeInTheDocument();

    const text2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(text2).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
