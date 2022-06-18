let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2 = 'agora vai';
// stringTest2 = unknownValor;

// validação para garantir que o que tem dentro de unknownValor
// realmente é uma propriedade que queremos
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

// exemplo do uso de never e throw
function jogaErro(erro: string, codigo: number): never { // never -> encerra abruptamente e nunca é finalizado
    throw { error: erro, code: codigo }; // interrompe o fluxo do código
}

jogaErro('deu erro', 500);