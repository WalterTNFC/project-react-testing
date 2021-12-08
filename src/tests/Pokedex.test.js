import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const textEncounteredPokemons = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(textEncounteredPokemons).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão é clicado', () => {
    renderWithRouter(<App />);
    // O botão deve conter o texto Próximo pokémon
    const nextPokemonButton = screen.getByRole('button', { name: /Próximo pokémon/i });

    // Acionar o button
    userEvent.click(nextPokemonButton);

    // charmander é o próximo depois do pikachu
    const nextPokemon = screen.getByText(/charmander/i);
    expect(nextPokemon).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    // botao deve conter o texto 'Electric' que contem apenas 1 pokemon
    const electricButton = screen.getByRole('button', { name: /Electric/i });

    // Aciona o botao "Electric"
    userEvent.click(electricButton);

    // Pega tudo que tem lá dentro e tem que ter apenas um componente, pokemon ([0])
    const electricType = screen.getAllByText(/Electric/i);
    expect(electricType[0]).toBeInTheDocument();
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const filterbutton = screen.getAllByTestId('pokemon-type-button');
    const typePokemonsNumber = 7;
    expect(filterbutton.length).toEqual(typePokemonsNumber);
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const resetButton = screen.getByRole('button', { name: /all/i });
    userEvent.click(resetButton);

    const reseted = screen.getByText(/Pikachu/i);
    expect(reseted).toBeInTheDocument();
  });
});
