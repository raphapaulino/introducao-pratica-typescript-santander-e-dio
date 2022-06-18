type anosDeVida = number | string;

enum ProfissaoDoDesafio2 {
    Atriz = 'Atriz',
    Padeiro = 'Pedreiro'
}

interface PessoaDoDesafio2 {
    nome: string,
    idade: anosDeVida,
    profissao: ProfissaoDoDesafio2,
}

let pessoa1: PessoaDoDesafio2 = {
    nome: "Maria",
    idade: 29,
    profissao: ProfissaoDoDesafio2.Atriz
}

let pessoa2: PessoaDoDesafio2 = {
    nome: "Roberto",
    idade: 19,
    profissao: ProfissaoDoDesafio2.Padeiro,
}

let pessoa3: PessoaDoDesafio2 = {
    nome: "Laura",
    idade: "32",
    profissao: ProfissaoDoDesafio2.Atriz,
}

let pessoa4: PessoaDoDesafio2 = {
    nome: "Carlos",
    idade: 19,
    profissao: ProfissaoDoDesafio2.Padeiro,
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);