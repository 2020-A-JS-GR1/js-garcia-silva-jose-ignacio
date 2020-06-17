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
// Acceder a las propiedades del objeto
jose.nombre; // "José I."
jose.apellido; // 'García
jose["nombre"];// "Jose I."
console.log(jose);
jose.nombre = "Ignacio";
console.log(jose);
jose["nombre"] = "Jose I.";
console.log(jose);
jose.sueldo; // undefined
console.log(jose.sueldo); //undefined
jose.sueldo = 1.2;
console.log(jose.sueldo); // 1.2
jose["gastos"] = 0.8;
console.log(jose.gastos); // 0.8
jose.nombre = undefined;
console.log(jose);
delete jose.nombre; // Eliminar la llave "nombre

Object.keys(jose);
console.log(Object.keys(jose));
console.log(Object.values(jose));

//Lista de variables por valor en JS
// number
// string
// boolean
// undefined

let edadAdrian = 31;
let edadVicente = edadAdrian; // 31
console.log(edadAdrian); // 31
edadAdrian = edadAdrian + 1;
console.log(edadAdrian); // 32
console.log(edadVicente); // 31

// Lista de variables por REFERENCIA en JS
/*
let rafael = {
 /*
    nombre: "Rafael"
};
let lenin = rafael;
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
console.log(rafael);
console.log(lenin);
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
*/

let rafael = {
    nombre: "Rafael"
};
let lenin = Object.assign({}, rafael);
// let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);
let arregloClonado = Object.assign([], [1,2,3,4,5])
console.log(arregloClonado);

/*const arregloNumeros = []; //object
console.log(jose);
console.log(arregloNumeros);
*/

