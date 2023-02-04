// Para especificar las pruebas de un archivo
// npm run test
// w
// p
// 05-funciones
// enter

import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas 05-funciones', () => {

  test('getUser debe de retornar un objeto', () => { 

    // Los objetos se comparan por medio del espacio de memoria
    // aunque sean iguales
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    // verificar los objetos con toStrictEqual o toEqual
    expect( testUser ).toEqual( user );

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {

    const name = 'Angel';

    const user = getUsuarioActivo(name);

    expect( user ).toStrictEqual({
      uid: 'ABC567',
      username: name
    });

  });

});