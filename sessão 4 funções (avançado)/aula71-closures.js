function retornaFuncao() {
    const nome = 'Danilo';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);