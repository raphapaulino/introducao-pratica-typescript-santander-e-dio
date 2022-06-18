// let buttonTeste = document.getElementById('button');

// // function somarImplicito(parametro1, parametro3) {
// //     return parametro1 + parametro3;
// // }

// buttonTeste?.addEventListener('click', () => {
//     console.log('funcionou')
// })

// interface Teste {
//     nome: string,
//     idade: number
// }

// const object: Teste = {
//     nome: 'string',
//     idade: 23232
// }

// function somarValores(input1: number | string, input2: number | string) {
//     if (typeof input1 === 'string' || typeof input2 === 'string') {
//         return input1.toString() + input2.toString();
//     }
//     else {
//         return input1 + input2;
//     }
// }

// console.log(somarValores(1, 5));
// console.log(somarValores('Olá', ', tudo bem?'));
// console.log(somarValores('1', 5));


// const pessoa = {
//     nome: 'Mariana',
//     idade: 28,
//     profissao: 'desenvolvedora'
// };

// pessoa.idade = 25;

// const andre: {nome: string, idade: number, profissao: string} = {
//     nome: 'Andre',
//     idade: 25,
//     profissao: 'pintor'
// };

// const paula: {nome: string, idade: number, profissao: string} = {
//     nome: 'Paula',
//     idade: 25,
//     profissao: 'Desenvolvedora'
// };

// enum Profissao {
//     Professora,
//     Atriz,
//     Desenvolvedora,
//     JogadoraDeFutebol
// }

// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao?: Profissao
// }

// interface Estudante extends Pessoa {
//     materias: string[];
// }

// const vanessa: Pessoa = {
//     nome: 'Vanessa',
//     idade: 23,
//     profissao: Profissao.Desenvolvedora
// };

// const maria: Pessoa = {
//     nome: 'Maria',
//     idade: 23,
//     profissao: Profissao.Desenvolvedora
// };

// const jessica: Estudante = {
//     nome: 'Jessica',
//     idade: 28,
//     profissao: Profissao.Desenvolvedora,
//     materias: ['Matemática discreta', 'programação']
// };

// const monica: Estudante = {
//     nome: 'Mônica',
//     idade: 25,
//     materias: ['Matemática discreta', 'programação']
// };

// function listar(lista: string[]) {
//     for (const item of lista) {
//         console.log('- ', item);
//     }
// }

// listar(monica.materias);


// let anyEstaDeVolta: any;
// anyEstaDeVolta = 3;
// anyEstaDeVolta = 'teste';
// anyEstaDeVolta = 5;

// let stringTest = 'verificar';
// stringTest = anyEstaDeVolta;

// let unknownValor: unknown;
// unknownValor = 3;
// unknownValor = 'opa';
// unknownValor = true;
// unknownValor = 'vai sim';

// let stringTest2 = 'agora vai';
// // stringTest2 = unknownValor;

// // validação para garantir que o que tem dentro de unknownValor
// // realmente é uma propriedade que queremos
// if (typeof unknownValor === 'string') {
//     stringTest2 = unknownValor;
// }

// // exemplo do uso de never e throw
// function jogaErro(erro: string, codigo: number): never { // never -> encerra abruptamente e nunca é finalizado
//     throw { error: erro, code: codigo }; // interrompe o fluxo do código
// }

// jogaErro('deu erro', 500);