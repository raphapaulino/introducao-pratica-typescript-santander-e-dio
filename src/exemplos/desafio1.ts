// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface PessoaDoDesafio {
    nome: string
}

interface Colaborador extends PessoaDoDesafio {
    codigo: number,
    salario: number
}

let john: Colaborador = {
    codigo: 1,
    nome: 'John',
    salario: 2500
}

console.log(john);