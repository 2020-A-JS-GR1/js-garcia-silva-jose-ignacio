const arreglo = [
    {
        id:1,
        nombre: 'José',
        nota:5
    },
    {
        id:2,
        nombre: 'Ignacio',
        nota:4
    },
    {
        id:3,
        nombre: 'Johanna',
        nota:6
    },
    {
        id:4,
        nombre: 'Daniel',
        nota:7
    },
    {
        id:5,
        nombre: 'Juan',
        nota:2
    },
    {
        id:6,
        nombre: 'Vicente',
        nota:9
    },
    {
        id:7,
        nombre: 'Iván',
        nota:17
    },
    {
        id:8,
        nombre: 'Katherin',
        nota:6
    },
    {
        id:9,
        nombre: 'Camilo',
        nota:13
    },
    {
        id:10,
        nombre: 'Felipe',
        nota:14
    }
]

// FUNCIONES COMO PARAMETROS

// FIND
// devolver una expersion -> TRUTY FALSY
const respuestaFind = arreglo
.find(
    function(valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Vicente";
    }
);
console.log('respuestaFind', respuestaFind); // undefined

const respuestaIndex = arreglo
    .findIndex(
        function(valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Vicente";
        }
    );
console.log('respuestaFind', respuestaIndex); // undefined

// FOREACH
const respuestaForEach = arreglo
    .forEach(
        function(valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
        }
    );
console.log('respuestaFind', respuestaForEach); // undefined

// MAP
// devolver NUEVO ELEMENTO
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleot) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

// MAP
// devolver NUEVO ELEMENTO
const respuestaMapNuevo = arreglo
    .map(
        // Función Anónima -> NO TIENE NOMBRE
        // Función de Flecha GORDA
        (valorActual, indiceActual, arregloCompleot) => {
            valorActual.nota = valorActual.nota + 1;
            return valorActual;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

// FILTER
// devolver EXPRESION TRUTY FALSY
const respuestaMapFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleot) => {
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);