// 04-clases.ts
class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreReferencial = "Humano";
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const adrian = new Usuario("Adrián", "Eguez", '1718137159', 'soltero');
console.log(adrian.nombre);
console.log(adrian.apellido);
console.log(adrian.cedula);
console.log(adrian.estadoCivil);
