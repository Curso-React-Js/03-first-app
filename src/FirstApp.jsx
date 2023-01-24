// Instalar npm i prop-types
import PropTypes from 'prop-types';

// IMPORTACION DE FRAGMENTO
// import { Fragment } from 'react'
// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1>Angel</h1>
//       <p>Soy un parrafo</p>
//     </Fragment>
//   );
// }

// const newMessage = [1,2,3,4,5,6,7,8,9];
const newMessage = {
  message: 'Hola Mundo',
  title: 'Angel'
};

const getMessage = () => {
  return 'hola'
}

const getResult = (a, b) => {
  return a + b;
}

// props => son las propiedades que envian desde otro lugar
// export const FirstApp = ( props ) => {
export const FirstApp = ({ title, subTitle }) => {
  // console.log(props);

  return (
    <>
      <h1>{ title }</h1>
      {/* <h1>Result: { getResult(1, 3) }</h1> */}
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}