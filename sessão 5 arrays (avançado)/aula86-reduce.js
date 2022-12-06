

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// somando todos os numeros (reduce)
const totalSoma = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;

    return acumulador;
}, 0);

// retorne um array com os pares (filter)
const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 == 0) acumulador.push(valor)

    return acumulador;
}, []);

 // retorne um array com o dobro dos valores
 const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);

    return acumulador
 }, []);

 const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

// retorne a pessoa mais velha

const maisVelha = pessoas.reduce((acumulador, valor) => {
    /*
        como o acumulador não foi declarado após a função o acumulador fica por padrão 
        com o valor do primeiro elemento do array que no caso é o indice 0
    */ 
    if(acumulador.idade > valor.idade) return acumulador;
    /*
        valor a cada volta na iteração recebe o valor de um elemento no array então como
        o acumulador é o indice zero, valor agora tem o valor do indice 1 { nome: 'Maria', idade: 23 },
        a cada volta valor passa para o valor de baixo então na iteração 1 temos { nome: 'Maria', idade: 23 },
        na iteração 2 teremos { nome: 'Eduardo', idade: 55 },
    */
    return valor;
})