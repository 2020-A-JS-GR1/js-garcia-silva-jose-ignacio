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

vocales = ["a", "i", "u", "e", "o"];
let puntajeVocales = 0.1;
let puntajeConsonantes = 0.05;
let contador = 0;

const ayuditaEstudiantes = arreglo.map(
    (estudiantes) => {
        for (let letra of estudiantes.nombre.toLowerCase()) {
            if(vocales.includes(letra)){
                contador++
            }
        }
        estudiantes.nota += puntajeVocales * contador + ((estudiantes.nombre.length - contador) * puntajeConsonantes);
        contador = 0;
        return estudiantes;

    }
);

const estudiantesAprobados = ayuditaEstudiantes.filter(
    (valorActual) => {
        return valorActual.nota > 14;
    }
);

console.log(ayuditaEstudiantes);
console.log(estudiantesAprobados);
