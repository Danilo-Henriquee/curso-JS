const pessoa = {
    nome: 'Danilo',
    sobrenome: 'Marques',
    idade: 14
};

for (let chaves in pessoa) {
    console.log(chaves ,pessoa[chaves])
}
console.log('##########')
const nomes = ['Danilo', 'Henrique', 'Marques']

for (let valor of nomes){
    console.log(valor);
}

// For classico - Geralmente com iteráveis (Array ou strings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays, strings)