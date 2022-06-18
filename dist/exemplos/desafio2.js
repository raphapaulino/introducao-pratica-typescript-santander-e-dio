"use strict";
var ProfissaoDoDesafio2;
(function (ProfissaoDoDesafio2) {
    ProfissaoDoDesafio2["Atriz"] = "Atriz";
    ProfissaoDoDesafio2["Padeiro"] = "Pedreiro";
})(ProfissaoDoDesafio2 || (ProfissaoDoDesafio2 = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: ProfissaoDoDesafio2.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: ProfissaoDoDesafio2.Padeiro,
};
let pessoa3 = {
    nome: "Laura",
    idade: "32",
    profissao: ProfissaoDoDesafio2.Atriz,
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: ProfissaoDoDesafio2.Padeiro,
};
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
