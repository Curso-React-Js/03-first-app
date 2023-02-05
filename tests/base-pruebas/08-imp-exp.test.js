import heroes from '../../src/data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => { 
  
  test('getHeroeById debe de retornar un héroe por ID', () => {

    const id = 1;
    const heroe = getHeroeById( id );
    // console.log(heroe);

    expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

  });

  test('getHeroeById debe de retornar un undefined sino existe ID', () => {

    const id = 100;
    const heroe = getHeroeById( id );
    // console.log(heroe);

    // expect( heroe ).toBe( undefined );
    expect( heroe ).toBeFalsy();

  });

  test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC';

    const heroesDC = getHeroesByOwner(owner);
    // console.log(heroesDC);

    expect( heroesDC.length ).toBe( 3 );
    expect( heroesDC ).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);

    expect( heroesDC ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
  
  });

  test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel';

    const heroesMarvel = getHeroesByOwner(owner);
    // console.log(heroesMarvel);

    expect( heroesMarvel.length ).toBe( 2 );
    expect( heroesMarvel ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

  });

});