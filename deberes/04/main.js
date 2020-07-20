const inquirer = require('inquirer');
const clear = require('clear');
const fs = require('fs');

function readFilePromise(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, content) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(content);
                    }
                }
            )
        }
    );
}

const terrainType = ['irregular', 'polygon', 'circular'];
const soilType = ['sandy', 'clay', 'silt', 'peat', 'chalk', ];

const examplePlant = {
    id: '0000000001',
    name: 'Pine',
    scientificName: 'Pinus',
    perennial: true,
    avgLifeSpan: 1000,
    diseaseResistant: false
};
const exampleTerrain = {
    id:'00000001',
    type: terrainType[1],
    //area in m²
    area: '100',
    //perimeter in m
    perimeter: '40',
    soil: soilType[2],
    wasteland: false,
    plants: [examplePlant]
};
const exampleTerrain2 = {
    id:'00000002',
    type: terrainType[1],
    //area in m²
    area: '100',
    //perimeter in m
    perimeter: '40',
    soil: soilType[2],
    wasteland: false,
    plants: [examplePlant]
};

async function main() {
    clear();
    console.log('Welcome to the Terrain-Plants information system');

    try{
        const content = await readFilePromise('./terrain-plants.txt')
        const terrains = JSON.parse(content);
        const terrainShowList = terrains.map(function (valorActual) {
            return valorActual.id;
        });
        const terrainsList = terrains.map(function (valorActual) {
            return valorActual;
        });

        let question = "1";
        while(question !== "Exit"){
            let answer =  await inquirer.prompt([
                {
                    type: 'list',
                    name: 'mainMenuActions',
                    message: 'What do you want to do?',
                    choices: ['Add new', 'Exit'].concat(terrainShowList)
                }
            ]);
            clear();
            question = answer.mainMenuActions;
            switch (question) {
                case "Add new":
                    console.log('Add new Terrain');
                    while(question !== "confirmed"){
                        answer = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'typeTerrainList',
                                message: 'Terrain\'s shape',
                                choices: ['Irregular', 'Polygon', 'Circular']
                            },
                            {
                                type: 'input',
                                name: 'area',
                                message: 'Terrain\'s area',
                                validate: function (value) {
                                    let pass = value.match(/^[0-9]+\.[0-9]+$/);
                                    if(pass){
                                        return true;
                                    }
                                    return 'Please enter a valid number Example: 12.45'
                                }

                            }
                        ])
                    }
                    break;
                case "Exit":
                    console.log('Thank you for using Terrain-Plants');
                    break;
                default:
                    const terrain = terrainsList.find(
                        function (valorActual) {
                            return valorActual.id === answer.mainMenuActions;
                        }
                    );
                    console.log('ID: ', terrain.id);
                    console.log('Type: ', terrain.type);
                    console.log('Area: ', terrain.area);
                    console.log('Perimeter: ', terrain.perimeter);
                    console.log('Soil: ', terrain.soil);
                    console.log('Wasteland: ', terrain.wasteland);

                    const plantsList = terrain.plants.map(
                        function (valorActual) {
                            return valorActual;
                        }
                    );
                    const plantsShowList = terrain.plants.map(
                        function (valorActual) {
                            return valorActual.name;
                        }
                    );
                    while(question !== "Back"){
                        answer =  await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'terrainMenuActions',
                                message: 'Terrain Actions',
                                choices: ['Show Plants', 'Edit Terrain', 'Delete Terrain', 'Back']
                            }
                        ]);
                        clear();
                        question = answer.terrainMenuActions;
                        switch (question) {
                            case "Show Plants":
                                while(question !== "Close"){
                                    answer =  await inquirer.prompt([
                                        {
                                            type: 'list',
                                            name: 'ShowPlantsActions',
                                            message: 'Terrain Plants',
                                            choices: ['Add new', 'Close'].concat(plantsShowList)
                                        }
                                    ]);
                                    clear();
                                    question = answer.ShowPlantsActions;
                                    switch (question) {
                                        case "Add new":
                                            break;
                                        case "Close":
                                            break;
                                        default:
                                            const plant = plantsList.find(
                                                function (valorActual) {
                                                    return valorActual.name === question;
                                                }
                                            );
                                            console.log('ID: ', plant.id);
                                            console.log('Name: ', plant.name);
                                            console.log('scientificName: ', plant.scientificName);
                                            console.log('Perennial: ', plant.perennial);
                                            console.log('Average Life Span (years): ', plant.avgLifeSpan);
                                            console.log('Disease Resistant: ', plant.diseaseResistant);
                                            break;
                                    }
                                }
                                break;
                            case "Edit Terrain":
                                break;
                            case "Delete Terrain":
                                break;
                            case "Back":
                                break;
                        }
                    }

                    break;
            }
        }
    }catch (error) {
        console.error(error);
    }

}
main();

//console.log(JSON.stringify(terrains));

//console.log('respuestaForEach', terrainShowList);  // undefined