const fs = require('fs');

const writeFilePromise = (path, contenidoNuevo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoNuevo,
                {encoding: 'utf-8', flag: 'a'},
                (error) => {
                    if (error) {
                        console.log("Hubo error", error);
                    } else{
                        resolve('Escritura terminada con éxito');
                    }
                }
            );
        }
    );
}

const readFilePromise = (path) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        console.log("Hubo error", error);
                    } else{
                        resolve(contenido);
                    }
                }
            );
        }

    );
}

async function readWriteFile(path, contenidoNuevo){
    try{
        const content = await readFilePromise(path);
        console.log(content);
        const confirmation = await writeFilePromise(path, contenidoNuevo);
        console.log(confirmation);
    }catch (e) {
        console.log(e);
    }
}

const test = readWriteFile('./ejemplo.txt', 'XD');