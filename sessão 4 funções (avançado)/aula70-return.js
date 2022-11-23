// return - retorna o valor
// console.log - simplesmente exibe o valor e não faz mais nada

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

// aqui esta sendo passado o argumento para o parametro multiplicador
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// aqui está sendo passado o argumento para o parametro n
// o numero que vai ser duplicado, triplicado e etc.

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))