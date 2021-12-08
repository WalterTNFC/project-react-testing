import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument('Pikachu');

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toBeInTheDocument('Average weight: 6.0 kg');

    const pokemonImage = screen.getByAltText('Pikachu sprite');
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de nav', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText('More details');
    expect(moreDetails).toBeInTheDocument();
  });

  test('Teste se ao clicar no link de nav. do Pokémon, é feito o red. e verf URL', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByText(/more details/i);
    userEvent.click(moreDetails);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByText('More details');
    userEvent.click(moreDetails);

    const checked = screen.getByRole('checkbox');
    userEvent.click(checked);

    const favorited = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorited).toHaveAttribute('src', '/star-icon.svg');
    expect(favorited).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
