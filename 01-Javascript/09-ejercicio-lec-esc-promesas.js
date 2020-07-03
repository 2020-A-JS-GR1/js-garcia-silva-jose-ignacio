const fs = require('fs');
// 09-ejercicio-lec-esc-promesas
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo. Al final
vamos a leer el archivo nuevamente e imprimirlo en consola.
TODOO esto debe ser realizado con promesas
* */

function readFilePromise(path){
    const readFile = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject(error);
                    }else{
                        console.log(contenido);
                        resolve(contenido);
                    }
                }
            )
        }
    );
    return readFile;
}

function writeFilePromise(path, contenidoNuevo){
    const writeFile = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoNuevo,
                {encoding: 'utf-8', flag: 'a'},
                (error) =>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(contenidoNuevo);
                    }
                }
            )
        }
    );
    return writeFile;
}

function readWriteFile(path, contenidoNuevo){
    readFilePromise(path)
        .then(
            ()=> writeFilePromise(path, contenidoNuevo)
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

}

readWriteFile('./06-ejemplo.txt', 'Test');
