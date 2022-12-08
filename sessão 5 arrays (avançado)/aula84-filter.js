/*
    Filter, map, reduce
    Retorne os numeros maiores que 10
*/ 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
    método filter irá iterar sobre todos os elementos do array
*/
const numerosFiltrados = numeros.filter(valor => valor > 10);

/*
    o método filter passa o valor que foi iterado no array
    e retorna ele como argumento pro parametro valor da função
    se o valor que no caso é o elemento do array for maior que 10
    ele retorna true, o método filter funciona com o tipo boolean
    então se o boolean na iteração do valor for true, ele seta o valor
    no novo array de numerosFiltrados
*/

const pessoas = [
    { nome: 'Luiz', idade: 17 },
    { nome: 'Roberto', idade: 37 },
    { nome: 'Castanharia', idade: 26 },
    { nome: 'Rogério', idade: 48 },
    { nome: 'Cintia', idade: 51 },
    { nome: 'Carlos', idade: 61 }
];
// Retornar as pessoas cujo nome tenha 5 letras ou mais.
const pessoa5 = pessoas.filter(obj => obj.nome.length >= 5)

// Retornar pessoas que tem mais de 50 anos
const pessoaVelha = pessoas.filter(obj => obj.idade > 50)

// Retornar pessoas que terminam com a letra a
const pessoaA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a')
});
console.log(pessoaA)