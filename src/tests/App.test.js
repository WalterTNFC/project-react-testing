import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste do arquivo App.js', () => {
  test('Testa se o topo da aplicação tem um conjunto de links de navegação.', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();

    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();

    const favorite = screen.getByRole('link', { name: /favorite/i });
    expect(favorite).toBeInTheDocument();
  });

  test('Testa se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const heading = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });

  test('Testa se a aplicação é redirecionada para a página About', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const heading = screen.getByRole('heading', { name: /about/i });
    expect(heading).toBeInTheDocument();
  });

  test('Testa se a aplicação é redirecionada para a página Favorite', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');

    const heading = screen.getByRole('heading', { name: /Favorite pokémons/i });
    expect(heading).toBeInTheDocument();
  });
});
