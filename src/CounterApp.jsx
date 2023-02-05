import { useState } from 'react'; // Es un hook
import PropTypes from 'prop-types';

// No vuelve a renderizar la function ya que esta
// fuera del componente
// const handledAdd = (event) => { 
//   console.log(event);
// }

export const CounterApp = ({ value }) => {
  // counter es la variable inicial
  // const [ counter, setCounter ] = useState(10);
  const [ counter, setCounter ] = useState(value);

  const handledAdd = () => { 
    // setCounter(counter + 1); // cambia el estado
    setCounter((c) => c + 1);
  }

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      
      {/* Solo se manda la referencia */}
      {/* Es lo mismo que (event) => { .. } */}
      <button onClick={ handledAdd }>+ 1</button>
      <button onClick={ handleSubstract }>- 1</button>
      <button aria-label="btn-reset" onClick={ handleReset }>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
