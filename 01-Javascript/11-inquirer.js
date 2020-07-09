const inquirer = require('inquirer');
// npm install inquirer
async function main() {
    const respuesta = inquirer.prompt([
        {
        type:'input',
        name:'edad',
        message: 'Ingresa Tu Nombre'
        },
        {
            type:'input',
            name:'edad',
            message: 'Ingresa Tu Edad'
        }

    ])
}

main();