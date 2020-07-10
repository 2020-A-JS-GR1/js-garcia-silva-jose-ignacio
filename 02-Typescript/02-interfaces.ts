// 02-interfaces.ts
interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;

    // parámetro número, impuesto, sueldo + sueldo * impuesto
    calcularImpuesto: (impuesto: number) => number;
    // no reciba parámetros, devuelva 'AP' 'AF' 'AT'
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

const jose: Usuario  = {
    nombre: 'José',
    apellido: 'García',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: (mensaje: string)=>{
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto) => {
        return this.sueldo + (this.sueldo * impuesto);
    },
    estadoActual: () => {
      switch(this.estado){
          case 'AC':
            return 'AP';
          case 'IN':
              return 'AF';
          case 'BN':
              return 'AT';
      }
    }
};
