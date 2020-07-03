const fs = require('fs');
/*
Hacer una función que acepte como parámetro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La función debe tomar estos dos parámetros y leer
el archivo y añadir el texto al final de archivo.
 */

function escribirArchivo(path, contenidoNuevo) {
    // fs.readFile(path, codificación, callback);
    // fs.writeFile(path, contenido, codificación, callback);
    fs.readFile(
        './06-ejemplo.txt',
        'utf-8',
        (error, contenido) => {
            if(error){
                console.log("Hubo error", error);
            } else{
                console.log("Contenido anterior: ", contenido);
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    {encoding: 'utf-8', flag: 'a'},
                    (error) => {
                        if (error) {
                            console.log("Hubo error", error);
                        } else{
                            console.log('Operación terminada con éxito');
                        }
                    }
                );
            }

        }
    );

}
// escribirArchivo('..', 'Buenas tardes');

escribirArchivo('./06-ejemplo.txt', 'XD');

/*
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoLeido) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                escribirArchivo(path, contenidoNuevo, contenidoLeido)
            }
        }
    );
    // fs.writeFile(path, contenido, codificacion, callback(error));
}
function escribirArchivo(path, contenidoNuevo, contenidoLeido) {
    fs.writeFile(
        path,
        contenidoNuevo + '\n' + contenidoLeido,
        'utf-8',
        (error) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                console.log('Operacion terminada con exito')
            }
        });
}
*/