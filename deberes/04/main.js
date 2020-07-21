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
function writeFilePromise(path, newContent){
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                newContent,
                {encoding: 'utf-8', flag: 'w'},
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(newContent);
                    }
                }
            )
        }
    );
}

function createNewId(terrains){
    try{
        const newId = parseInt(terrains[terrains.length - 1].id) + 1;
        return newId.toString().padStart(8, '0');
    }catch (e) {
        return "00000001";
    }
}

const terrainType = ['irregular', 'polygon', 'circular'];
const soilType = ['sandy', 'clay', 'silt', 'peat', 'chalk', ];

async function main() {
    clear();
    console.log('Welcome to the Terrain-Plants information system');

    try{
        const content = await readFilePromise('./terrain-plants.txt')
        const terrains = JSON.parse(content);

        let question = "1";
        while(question !== "Exit"){
            const terrainShowList = terrains.map(function (valorActual) {
                return valorActual.id;
            });
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
                    while(question !== true){
                        answer = await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'typeTerrain',
                                message: 'Terrain\'s shape',
                                choices: terrainType
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

                            },
                            {
                                type: 'input',
                                name: 'perimeter',
                                message: 'Terrain\'s perimeter',
                                validate: function (value) {
                                    let pass = value.match(/^[0-9]+\.[0-9]+$/);
                                    if(pass){
                                        return true;
                                    }
                                    return 'Please enter a valid number Example: 12.45'
                                }
                            },
                            {
                                type: 'list',
                                name: 'soilType',
                                message: 'Terrain\'s soil\'s type',
                                choices: soilType
                            },
                            {
                                type: 'confirm',
                                name: 'wasteland',
                                message: 'Wasteland?',
                                default: true
                            },
                            {
                                type: 'confirm',
                                name: 'confirmTerrain',
                                message: 'The data entered is correct?',
                                default: false
                            }
                        ])
                        question = answer.confirmTerrain;
                        if(question === true){
                            terrains.push({
                                id: createNewId(terrains),
                                type: answer.typeTerrain,
                                //area in m²
                                area: answer.area,
                                //perimeter in m
                                perimeter: answer.perimeter,
                                soil: answer.soilType,
                                wasteland: answer.wasteland,
                                plants: []
                            })
                        }
                        await writeFilePromise('./terrain-plants.txt', JSON.stringify(terrains))
                    }
                    break;
                case "Exit":
                    console.log('Thank you for using Terrain-Plants');
                    break;
                default:
                    const terrain = terrains.find(
                        function (valorActual) {
                            return valorActual.id === answer.mainMenuActions;
                        }
                    );
                    while(question !== "Back"){
                        console.log('ID: ', terrain.id);
                        console.log('Type: ', terrain.type);
                        console.log('Area: ', terrain.area);
                        console.log('Perimeter: ', terrain.perimeter);
                        console.log('Soil: ', terrain.soil);
                        console.log('Wasteland: ', terrain.wasteland);
                        answer =  await inquirer.prompt([
                            {
                                type: 'list',
                                name: 'terrainMenuActions',
                                message: 'Terrain Actions',
                                choices: ['Show Plants', 'Edit Terrain', 'Delete Terrain', 'Back'],
                                loop: false
                            }
                        ]);
                        clear();
                        question = answer.terrainMenuActions;
                        switch (question) {
                            case "Show Plants":
                                while(question !== "Close"){
                                    const plantsShowList = terrain.plants.map(
                                        function (valorActual) {
                                            return valorActual.name;
                                        }
                                    );
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
                                            console.log('Add new Plant');
                                            while(question !== true){
                                                answer = await inquirer.prompt([
                                                    {
                                                        type: 'input',
                                                        name: 'name',
                                                        message: 'Plant\'s name'
                                                    },
                                                    {
                                                        type: 'input',
                                                        name: 'scientificName',
                                                        message: 'Plant\'s scientific Name',
                                                    },
                                                    {
                                                        type: 'input',
                                                        name: 'avgLifeSpan',
                                                        message: 'Average life Span (months)',
                                                        validate: function (value) {
                                                            let pass = value.match(/^[0-9]+$/);
                                                            if(pass){
                                                                return true;
                                                            }
                                                            return 'Please enter a valid number Example: 12'
                                                        }
                                                    },
                                                    {
                                                        type: 'confirm',
                                                        name: 'perennial',
                                                        message: 'Perennial?',
                                                        default: false,
                                                    },
                                                    {
                                                        type: 'confirm',
                                                        name: 'diseaseResistant',
                                                        message: 'Disease resistant?',
                                                        default: false
                                                    },
                                                    {
                                                        type: 'confirm',
                                                        name: 'confirmPlant',
                                                        message: 'The data entered is correct?',
                                                        default: false
                                                    }
                                                ])
                                                question = answer.confirmPlant;
                                                if(question === true){
                                                    terrain.plants.push({
                                                        id: createNewId(terrain.plants),
                                                        name: answer.name,
                                                        scientificName: answer.scientificName,
                                                        avgLifeSpan: answer.avgLifeSpan,
                                                        perennial: answer.perennial,
                                                        diseaseResistant: answer.diseaseResistant,
                                                    })
                                                }
                                                await writeFilePromise('./terrain-plants.txt', JSON.stringify(terrains))
                                            }
                                            break;
                                        case "Close":
                                            break;
                                        default:
                                            const plant = terrain.plants.find(
                                                function (valorActual) {
                                                    return valorActual.name === question;
                                                }
                                            );
                                            while(question !== "Back"){
                                                console.log('ID: ', plant.id);
                                                console.log('Name: ', plant.name);
                                                console.log('scientificName: ', plant.scientificName);
                                                console.log('Perennial: ', plant.perennial);
                                                console.log('Average Life Span (years): ', plant.avgLifeSpan);
                                                console.log('Disease Resistant: ', plant.diseaseResistant);

                                                answer =  await inquirer.prompt([
                                                    {
                                                        type: 'list',
                                                        name: 'plantMenuActions',
                                                        message: 'Plants Actions',
                                                        choices: ['Edit Plant', 'Delete Plant', 'Back'],
                                                        loop: false
                                                    }
                                                ]);
                                                clear();
                                                question = answer.plantMenuActions;
                                                switch (question) {
                                                    case "Edit Plant":
                                                        const plantEdit = terrain.plants.find(
                                                            function (element) {
                                                                return element.id === plant.id
                                                            }
                                                        );
                                                        const plantEditIndex = terrain.plants.findIndex(
                                                            function (element) {
                                                                return element.id === plant.id
                                                            }
                                                        );
                                                        const terrainEditIndex = terrains.findIndex(
                                                            function (element) {
                                                                return element.id === terrain.id
                                                            }
                                                        );
                                                        while(question !== true) {
                                                            //Delete ID OPTION
                                                            const attributeOptions = Object.keys(plantEdit);
                                                            //Delete ID
                                                            attributeOptions.splice(0,1);
                                                            answer = await inquirer.prompt([
                                                                {
                                                                    type: 'list',
                                                                    name: 'editPlantAttributes',
                                                                    message: 'Select an Attribute',
                                                                    choices: attributeOptions.concat('Finish'),
                                                                    loop: false
                                                                }
                                                            ]);
                                                            question = answer.editPlantAttributes;
                                                            switch (question) {
                                                                case "Finish":
                                                                    answer = await inquirer.prompt([
                                                                        {
                                                                            type: 'confirm',
                                                                            name: 'confirmPlantEdit',
                                                                            message: 'The data entered is correct?',
                                                                            default: false
                                                                        }
                                                                    ]);
                                                                    clear();
                                                                    terrains[terrainEditIndex].plants[plantEditIndex] = plantEdit;
                                                                    await writeFilePromise('./terrain-plants.txt', JSON.stringify(terrains));
                                                                    question = true;
                                                                    break;
                                                                case "name":
                                                                    answer = await inquirer.prompt([
                                                                        {
                                                                            type: 'input',
                                                                            name: 'name',
                                                                            message: 'Plant\'s name'
                                                                        },
                                                                    ]);
                                                                    plantEdit.name = answer.name;
                                                                    break;
                                                                case "scientificName":
                                                                    answer = await inquirer.prompt([
                                                                        {
                                                                            type: 'input',
                                                                            name: 'scientificName',
                                                                            message: 'Plant\'s scientific name',
                                                                        }
                                                                    ]);
                                                                    plantEdit.scientificName = answer.scientificName;
                                                                    break;
                                                                case "avgLifeSpan":
                                                                    answer = await inquirer.prompt([
                                                                        {
                                                                            type: 'input',
                                                                            name: 'avgLifeSpan',
                                                                            message: 'Plant\'s life Span',
                                                                            validate: function (value) {
                                                                                let pass = value.match(/^[0-9]+$/);
                                                                                if(pass){
                                                                                    return true;
                                                                                }
                                                                                return 'Please enter a valid number Example: 13'
                                                                            }
                                                                        },
                                                                    ]);
                                                                    plantEdit.avgLifeSpan = answer.avgLifeSpan;
                                                                    break;
                                                                case "perennial":
                                                                    answer = await inquirer.prompt([
                                                                        {
                                                                            type: 'confirm',
                                                                            name: 'perennial',
                                                                            message: 'Perennial?',
                                                                            default: false,
                                                                        },
                                                                    ]);
                                                                    plantEdit.perennial = answer.perennial;
                                                                    break;
                                                                case "diseaseResistant":
                                                                    answer = await inquirer.prompt([
                                                                        {
                                                                            type: 'confirm',
                                                                            name: 'diseaseResistant',
                                                                            message: 'Disease resistant?',
                                                                            default: false
                                                                        },
                                                                    ]);
                                                                    plantEdit.diseaseResistant = answer.diseaseResistant;
                                                                    break;
                                                            }
                                                        }
                                                        break;
                                                    case "Delete Plant":
                                                        const terrainDeleteIndex = terrains.findIndex(
                                                            function (element) {
                                                                return element.id === terrain.id
                                                            }
                                                        );
                                                        const plantDeleteIndex = terrain.plants.findIndex(
                                                            function (element) {
                                                                return element.id === plant.id
                                                            }
                                                        );
                                                        terrains[terrainDeleteIndex].plants.splice(plantDeleteIndex, 1);
                                                        console.log('Terrain deleted successfully');
                                                        question = "Back";
                                                        await writeFilePromise('./terrain-plants.txt', JSON.stringify(terrains, ));
                                                        break;
                                                    case "Back":
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                break;
                            case "Edit Terrain":
                                const terrainEdit = terrains.find(
                                    function (element) {
                                        return element.id === terrain.id
                                    }
                                );
                                const terrainEditIndex = terrains.findIndex(
                                    function (element) {
                                        return element.id === terrain.id
                                    }
                                );
                                while(question !== true) {
                                    //Delete ID and Plants OPTION
                                    const attributeOptions = Object.keys(terrainEdit);
                                    //Delete ID
                                    attributeOptions.splice(0,1);
                                    //Delete Plants
                                    attributeOptions.splice(-1,1);
                                    answer = await inquirer.prompt([
                                        {
                                            type: 'list',
                                            name: 'editTerrainAttributes',
                                            message: 'Select an Attribute',
                                            choices: attributeOptions.concat('Finish'),
                                            loop: false
                                        }
                                    ]);
                                    question = answer.editTerrainAttributes;
                                    switch (question) {
                                        case "Finish":
                                            answer = await inquirer.prompt([
                                                {
                                                    type: 'confirm',
                                                    name: 'confirmTerrainEdit',
                                                    message: 'The data entered is correct?',
                                                    default: false
                                                }
                                            ]);
                                            terrains[terrainEditIndex] = terrainEdit;
                                            await writeFilePromise('./terrain-plants.txt', JSON.stringify(terrains));
                                            question = true;
                                            break;
                                        case "type":
                                            answer = await inquirer.prompt([
                                                {
                                                    type: 'list',
                                                    name: 'typeTerrainEdit',
                                                    message: 'Terrain\'s shape',
                                                    choices: terrainType
                                                }
                                            ]);
                                            terrainEdit.type = answer.typeTerrainEdit;
                                            break;
                                        case "area":
                                            answer = await inquirer.prompt([
                                                {
                                                    type: 'input',
                                                    name: 'areaEdit',
                                                    message: 'Terrain\'s area',
                                                    validate: function (value) {
                                                        let pass = value.match(/^[0-9]+\.[0-9]+$/);
                                                        if(pass){
                                                            return true;
                                                        }
                                                        return 'Please enter a valid number Example: 12.45'
                                                    }

                                                }
                                            ]);
                                            terrainEdit.area = answer.areaEdit;
                                            break;
                                        case "perimeter":
                                            answer = await inquirer.prompt([
                                                {
                                                    type: 'input',
                                                    name: 'perimeterEdit',
                                                    message: 'Terrain\'s perimeter',
                                                    validate: function (value) {
                                                        let pass = value.match(/^[0-9]+\.[0-9]+$/);
                                                        if(pass){
                                                            return true;
                                                        }
                                                        return 'Please enter a valid number Example: 12.45'
                                                    }
                                                },
                                            ]);
                                            terrainEdit.perimeter = answer.perimeterEdit;
                                            break;
                                        case "soil":
                                            answer = await inquirer.prompt([
                                                {
                                                    type: 'list',
                                                    name: 'soilTypeEdit',
                                                    message: 'Terrain\'s soil\'s type',
                                                    choices: soilType
                                                }
                                            ]);
                                            terrainEdit.soil = answer.soilTypeEdit;
                                            break;
                                        case "wasteland":
                                            answer = await inquirer.prompt([
                                                {
                                                    type: 'confirm',
                                                    name: 'wastelandEdit',
                                                    message: 'Wasteland?',
                                                    default: true
                                                }
                                            ]);
                                            terrainEdit.wasteland = answer.wastelandEdit;
                                            break;
                                    }
                                }
                                break;
                            case "Delete Terrain":
                                const terrainDeleteIndex = terrains.findIndex(
                                        function (element) {
                                            return element.id === terrain.id
                                        }
                                    );
                                terrains.splice(terrainDeleteIndex, 1);
                                console.log('Terrain deleted successfully');
                                question = "Back";
                                await writeFilePromise('./terrain-plants.txt', JSON.stringify(terrains));
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