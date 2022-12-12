const pessoas = [
    { id: 3, nome: 'Danilo' },
    { id: 2, nome: 'Malinois' },
    { id: 1, nome:  'Dalmata' },
];
/*
para exibir o objeto em sua devida ordem em que foi
declarado usa-se o objeto map
*/

const novaPessoas = new Map();

for(let pessoa of pessoas) {
    // atribuição via desestruturação id agora é uma variavel
    const { id } = pessoa;

    // primeiro argumento é a chave que eu quero
    // segundo argumento o valor que eu quero colocar no map
    novaPessoas.set(id, { ...pessoa });
}

console.log(novaPessoas.get(2));