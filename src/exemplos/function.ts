// function somarValoresNumericos(numero1: number, numero2: number) {
//     return numero1 + numero2.toString();
// }

// console.log(somarValoresNumericos(1, 3));

// gera o erro: error TS2322: Type 'string' is not assignable to type 'number'.
// function somarValoresNumericos(numero1: number, numero2: number): number {
//     return numero1 + numero2.toString();
// }

// console.log(somarValoresNumericos(1, 3));


// // compila normalmente
// function somarValoresNumericos(numero1: number, numero2: number): number {
//     return numero1 + numero2;
// }

// console.log(somarValoresNumericos(1, 3));


// retorno do tipo void
function printaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}


function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number) {
    return numero / numero;
}

// 1 + 3 = 4 | 4 * 4 = 16
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
// 1 + 3 = 4 | 4 / 4 = 1
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));