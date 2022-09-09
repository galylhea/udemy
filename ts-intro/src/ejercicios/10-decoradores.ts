
/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "overrride";
    };
}

@classDecorator
class MiSuperClase {
    public miPropietad: string = 'ABC123';

    imprimir() {
        console.log('Hoola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropietad);



