const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par =(');
            }
        }
    )
    return miPrimerPromesa
}


function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa
}
promesaEsPar(6)
    .then( // try
        (numeroPar) => {
            console.log('Contenido then', numeroPar);
            /*
            NO HACER ESTO
            promesaEsPar(2)
                .then( // try
                    (contenido) => {
                        console.log('Contenido then', contenido);
                    }
                )
                .catch( // catch
                    (error) => {
                        console.error('Contenido catch', error);
                    }
                )
            */
            return promesaElevarAlCuadrado(numeroPar) // promesa !
        }
    )
    .then(
        (numeroParAlCuadrado) => {
            console.log('Numero par al cuadrado: ', numeroParAlCuadrado)
        }
    )
    .catch( // catch
        (error) => {
            console.error('Contenido catch', error);
        }
    )