
// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async (apiKey = 'EXnq69FyQDXiconiDW07qvK2UjrY2nuI') => {

    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        //console.error(error);
        return 'No se encontro la imagen';
    }

}
