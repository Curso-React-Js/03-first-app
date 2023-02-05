import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en el <CounterApp />', () => {

  const initialValue = 10;

  test('debe de hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={ initialValue } />);

    expect( container ).toMatchSnapshot();

  });

  test('debe de mostrar el valor inicial de 100 <CounterApp value={100}/>', () => {

    const valorInicial = 100;
    render(<CounterApp value={ valorInicial } />);
    
    expect( +screen.getByRole('heading', { level: 2 } ).innerHTML ).toBe(valorInicial);
    expect( screen.getByText( valorInicial ) ).toBeTruthy();

  });

  test('debe de incrementar con el boton +1', () => {

    render(<CounterApp value={ initialValue } />);

    // Evento que simula un click
    fireEvent.click( screen.getByText('+ 1') );

    expect( screen.getByText('11') ).toBeTruthy();
   
  });

  test('debe de decrementar con el boton -1', () => {

    render(<CounterApp value={ initialValue } />);

    // Evento que simula un click
    // screen.debug();
    fireEvent.click( screen.getByText('- 1') );
    // screen.debug();

    expect( screen.getByText('9') ).toBeTruthy();
   
  });

  test('debe de funcionar el boton de reset', () => {

    // SUJETO DE PRUEBAS
    render(<CounterApp value={ 400 } />);

    // PROVOCAR UN ESTIMULO
    // Evento que simula un click
    fireEvent.click( screen.getByText('+ 1') );
    fireEvent.click( screen.getByText('+ 1') );
    fireEvent.click( screen.getByText('+ 1') );

    expect( screen.getByText('403') ).toBeTruthy();
    // screen.debug();
    
    // fireEvent.click( screen.getByText('Reset') );
    // expect( screen.getByText('400') ).toBeTruthy();
    // screen.debug();

    // obtener el elemento HTML por medio del aria-label="btn-reset" del elemento especifico
    fireEvent.click( screen.getByRole('button', { name: 'btn-reset' } ) );

    // MOSTRAR COMPORTAMIENTO ESPERADO DE LAS PRUEBAS
    expect( screen.getByText('400') ).toBeTruthy();

  });

});