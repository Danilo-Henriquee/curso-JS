// closure é a habilidade que a função tem de acessar seu escopo lexico

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Danilo');
const funcao2 = retornaFuncao('Henrique');

console.log(funcao(), funcao2());