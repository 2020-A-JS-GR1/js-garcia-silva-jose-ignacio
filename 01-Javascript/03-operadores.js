const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// FUNCIONES COMO PARAMETROS

// FIND
// devolver una expresion -> TRUTY FALSY
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaFind', respuestaFind);  // undefined

// FINDINDEX
// devolver una expresion -> TRUTY FALSY
const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex);  // undefined


// for (let i; i>arreglo.length; i--){
//     console.log('valorActual', arreglo[i]);
// }
// FOREACH
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
        }
    );
console.log('respuestaForEach', respuestaForEach);  // undefined

// MAP
// devolver NUEVO ELEMENTO
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);
const respuestaMapNuevo = arreglo
    .map(
        // Funcion Anonima -> NO TIENE NOMBRE
        // Funcion de flecha GORDA
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

// FILTER
// devolver EXPRESION TRUTY FALSY
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

// SOME -> expresion
// DEVUELVE BOOLEANO
// Hay ALGUNA nota menor a nueve? SI NO
// OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);


// EVERY -> expresion
// DEVUELVE BOOLEANO
// TODAS las notas son mayores a 14? SI NO
// AND

const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

// [1,2,3,4,5,6,5,4,3,1]
// reduce           izq -> der
// reduce           der -> izq
const respuestaReduce = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo)=>{
            return valorAcumulado + valorActual.nota;
        },
        0 // Acumulador
    )
console.log('respuestaReduce', respuestaReduce);

/*
const arreglosEstudiantesMenoresAlNueve = arreglo
    .map((v)=>v.nota * 1.3) // añadiendo el 30%
    .filter((nota)=> nota < 9) // Busco a los < 9
    .reduce((acumulado, actual)=> acumulado + actual, 0); // total
const notaPromedio = totalPuntosEstudiantes / arreglosEstudiantesMenoresAlNueve.length;
 */