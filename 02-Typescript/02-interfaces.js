var _this = this;
var adrian = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario: function (mensaje) {
        // if(this.sueldo){
        //
        // }else{
        //     return
        // }
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
adrian.imprimirUsuario('fgdgfdf');
// adrian.calcularImpuesto(12);
adrian.calcularImpuesto(12);
var f1 = function () {
    return 'ok';
};
var f2 = function () {
    return 'ok';
};
var objeto = {
    f2: function () {
    },
    f4: function () {
    }
};
var a = [];
a.forEach(function () {
});
a.forEach(function () {
});
