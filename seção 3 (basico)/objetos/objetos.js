// para criar um objeto usa-se isso abaixo

let pessoa01 = {
    nome: 'miranda',
    sobrenome: 'merda',
    idade: 25
}

console.log(pessoa01.nome, pessoa01.sobrenome, pessoa01.idade)


const pessoa02 = {
    nome: 'rafael',
    sobrenome: 'viado',
    idade: 36
}

console.log(pessoa02.nome, pessoa02.sobrenome, pessoa02.idade)


//para simplificar posso criar uma função que cria os objetos automaticamente como abaixo

function criaPessoa(nome, sobrenome, idade)  {
    return {nome, sobrenome, idade};
}

//e para criar um objeto usando a função acima
//                          nome      sobrenome  idade
const pessoa1 = criaPessoa('danilo', 'henrique', 21);
const pessoa2 = criaPessoa('laura', 'henrique', 41);
const pessoa3 = criaPessoa('diego', 'marques', 30);

console.log(pessoa1.nome, pessoa2.nome)

