// 03-funciones.ts
function sumarNumeros(numeroInicial) {
    var numerosASumarse = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosASumarse[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
sumarNumeros(1, 2, 3, 4, 5);
function imprmir(mensaje) {
    console.log('Hola ' + mensaje);
}
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumerosTres = [1, 'a', true];
var arregloNumerosCuatro = [1, 2, 3];
var arregloNumerosOTexto = ['1', '2'];
arregloNumerosOTexto = [1, 2, 3];
