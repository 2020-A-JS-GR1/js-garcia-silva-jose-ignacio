// Mutables e Inmutables

var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
// Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "José"; // string
const booleano = false; // boolean
const hijos = null; // object
const zapatos = undefined // undefined
const apellido = 'Eguez'; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd"));
console.log(Number("asd"));

if(true == true){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if(""){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if("García"){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if(1){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if(0){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if(1){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if(null){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

if(undefined){
    console.log("Es verdadero");
}else{
    console.log("Es falso") //!
}

// Orden de importancia
// 1) const
// 2) "let"
// 3) X -> "var"

// Objetos Js (JSON)

const jose = {
    nombre: "José I.", // llave: valor,
    "apellido": 'García',
    edad: 31,
    hijos: null,
    zapatos: undefined,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda']
}; // object
jose.nombre; // "José I."
jose.apellido; // 'García



const arregloNumeros = []; //object

console.log(jose);
console.log(arregloNumeros);
