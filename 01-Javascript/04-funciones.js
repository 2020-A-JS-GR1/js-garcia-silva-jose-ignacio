// 04-funciones.js
function soloNumeros(a,b,c){
    return a - b + c; // valor a devolver
}
function soloLetras(a,b,c){ // undefined
    console.log(a,b,c);
}

// soloNumeros('v', true, [1,2,3]);
soloNumeros('v', true, [1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,78,9);
soloLetras()


// Funciones nombradas
function funcionNombrada(){}
funcionNombrada();
const funcionNombradaDos = function () {}; // funciones ANONIMAS
var funcionNombradaTres = function () {}; // funciones SIN NOMBRE
let funcionNombradaCuatro = function () {}; // funciones ANONIMAS
const funcionNombradaDos = function () {};
// opcional() NO EXISTO



const funcionNombradaCinco = () => {
}; // FAT ARROW FUNCTIONS
const funcionNombradaSeis = () => {
    return x + 1
}; // FAT ARROW FUNCTIONS
const funcionNombradaSiete = (x) => x + 1;  // FAT ARROW FUNCTIONS
                                            // Una sola línea
                                            // Omito Return
                                            // Omito llaves
const funcionNombradaOcho = x => x + 1;     // TENGO UN SOLO PARÁMETRO
                                            // Omito los paréntesis
const funcionNombradaSiete = (x,y,z) => x + y + z;  // TENGO SOLO UN PARÁMETRO
                                                    // Omito los paréntesis

function sumarNumeros(numeroInicial, //number
                      ...otrosNumeros){ // Parámetros Infinitos []
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10);

function sumarArreglo(arregloParametro) {
    const clonArreglo = Object.assign([].arregloParametro);
    clonArreglo[0] = 100;
    
}