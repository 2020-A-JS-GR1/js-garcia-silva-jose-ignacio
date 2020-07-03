
const fs = require('fs');
console.log('Primero'); // SINCRONA
fs.readFile( // ASINCRONA
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => { // CALLBACK (readFile)
        console.log('Segundo');
        if (error) {
            console.error('Hubo error', error);
        } else {
            console.log(contenido);
        }
    }
);



// EJEMPLO CODIGO MODO SINCRONO (NO EXISTE EN JS ESTE TIPO DE CODIGO PARA ESTA FUNCION)
// const respuesta = fs.readFile( // ASINCRONA
//     './06-ejemplo.txt',
//     'utf-8'
// );
const suma = 5 + 3; // SINCRONA
console.log('Suma', suma); // SINCRONA
console.log('Final'); // SINCRONA
console.log('Suma', suma); // SINCRONA
console.log('Final'); // SINCRONAconsole.log('Suma', suma); // SINCRONA