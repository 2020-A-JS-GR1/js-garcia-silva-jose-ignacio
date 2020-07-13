const fs = require('fs');

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

//readFilePromise('./terrain-plants.txt');

//readWriteFile('./terrain-plants', 'Test');
