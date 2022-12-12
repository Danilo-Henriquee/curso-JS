// dobrar os números

/*
    o map ele utiliza o valor do array original para criar um novo array
    ele não altera valores no array original.
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
    diferente do filter o map não retorna um boolean, o map retorna
    o valor diferente que irá ser adicionado no novo array.
*/
const numerosEmDobro = numeros.map((valor) => valor * 2)
/*
    o map ele sempre usara o tamanho do array original, diferentemente
    do filter que pode alongar ou encurtar o array.
*/
console.log(numerosEmDobro)
/*
    Para cada elemento:
    retorne apenas uma string com o nome da pessoa
    Remova apenas a chave "nome" do objeto
    Adicione uma chave id em cada objeto
*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
// 1 - retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => {
    const newObj = {...obj};

    return newObj.nome
})

// 2 - Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => {
    const newObj = {...obj}

    delete newObj.nome;

    return newObj;
})

// 3 - Adicione uma chave id em cada objeto
const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj}

    newObj.id = indice + 1;

    return newObj;
})
console.log(pessoas)


// os newObjs são uma cópia do objeto pessoas que está contido, no
// parametro obj das funções map, fez isso pois os maps estavam, 
// alterando o objeto original.