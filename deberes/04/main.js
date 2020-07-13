const inquirer = require('inquirer');
const clear = require('clear');
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

function main() {
    clear();
    console.log('Welcome to the Terrain-Plants information system');
    readFilePromise('./terrain-plants.txt')
        .then(
            ()=> inquirer.prompt(
                [
                    {
                        type: 'list',
                        name: 'mainMenuActions',
                        message: 'What do you want to do?',
                        choices: ['Add new', 'Exit']
                    }
                ])
                .then(answers => {

                })
                .catch(error => {
                    if (error.isTtyError) {

                    } else {

                    }
                })
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

}

main();


