import { usContext } from '../../src/base-pruebas/06-deses-obj';


describe('Pruebas 06-deses-obj', () => { 

  test('usContext debe de retornar un objeto', () => {

    const user = {
      clave: 'ABC-123',
      edad: 28,
    }

    const infoUser = usContext(user);

    expect( infoUser ).toEqual({
      nombreClave: 'ABC-123',
      anios: 28,
      latlng: { lat: 14.1232, lng: -12.3232 }
    });

  });

});