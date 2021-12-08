// Referencia: Helper copiado da nota de aula: "https://app.betrybe.com/course/front-end/testes-automatizados-com-react-testing-library/rtl-testando-react-router/58c480e0-79ed-47bd-a819-f88d82997927/conteudos/0189511f-5c08-4bea-9c72-0cecefb24011/testando-react-router/81d72a46-fc66-48e1-a69b-d8f3a0388424?use_case=side_bar"
// Esse codigo foi usado por conta do teste verificar o estado
// apos usar um botao
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;
