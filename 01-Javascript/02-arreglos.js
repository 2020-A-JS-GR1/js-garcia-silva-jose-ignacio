const arreglo = [1 , 2, 3, 4, 5, 6, 7, 8 , 9 , 10];
// arreglo = 1;
/* let cualquierCosa = "ASD"; ... */
const arregloTodo= [
    true, 1, 1.2, "Adrian", undefined, null, {}, [1, 2, true, "A"]
];
let a =[1,2,3];
const b = Object.assign([],a);

//for of
for (let numbero of arreglo){ // VALORES
    console.log('numbero', numbero)
}

//for in
for (let numbero in arreglo){ // INDICES
    console.log('numbero', numbero)
}

// const arreglo = [1 , 2, 3, 4, 5, 6, 7, 8 , 9 , 10];

arreglo.push(11); // Añadir al final de un elemento
// [1 , 2, 3, 4, 5, 6, 7, 8 , 9 , 10, 11];
arreglo.pop(); // Eliminar al final un elemento
// [1 , 2, 3, 4, 5, 6, 7, 8 , 9 , 10];
arreglo.unshift(5); // Añadir al principio del arreglo
// [5, 1 , 2, 3, 4, 5, 6, 7, 8 , 9 , 10];
arreglo.splice(0, 1);
// arreglo.splice(0,0,3,4,5)
arreglo.splice(0,0,3,4,5);

const indice = arreglo.indexOf(9);
console.log('indice', indice);
arreglo.splice(indice, 1);

// arreglo findIndex();


console.log(arreglo);
