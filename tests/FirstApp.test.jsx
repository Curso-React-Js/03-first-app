import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

  test('debe de hacer match con el snapshot', () => {

    const title = 'Hola, Soy Goku';
    const { container } = render( <FirstApp title={ title } /> );
    // console.log(container); => Es como un HTML
    
    // Crear el HTML renderizado como una fotografia
    // u para actualizar el snapshot
    expect( container ).toMatchSnapshot();

  });

  test('debe de mostrar el titulo en un h1', () => {

    const title = 'Hola, Soy Goku';
    const { container, getByText } = render( <FirstApp title={ title } /> );

    expect( getByText( title ) ).toBeTruthy();

    const h1 = container.querySelector('h1'); // Puede usar el DOM
    // console.log(h1.innerHTML);
    expect( h1.innerHTML ).toBe( title ); // Asegurarme que esta en un h1
    // expect( h1.innerHTML ).toContain( title ); // Asegurarme que lo contenga

  });
  
});