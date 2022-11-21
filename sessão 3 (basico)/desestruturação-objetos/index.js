const pessoa = { //foi criado um objeto pessoa que contém (nome, sobrenome...)
    nome: 'Danilo',
    sobrenome: 'Marques',
    idade: 18,
    endereco: {rua: 'Rua Doutor José', numero: 19}
};

const {nome, sobrenome} = pessoa // entre chaves eu coloco os elementos que existem
                                 // no meu objeto ou seja nome, sobrenome e etc
                                 // e eu atribuo o valor do objeto pessoa.
const {idade: quantosAnos} = pessoa; // quando usa-se o objeto mais dois pontos
console.log(quantosAnos)            // pode-se renomear o objeto então o que está dentro de pessoa chamado idade agora é *quantosAnos*

const { endereco: {rua: r, numero}, endereco } = pessoa; // para acessar um objeto dentro de um objeto
                                            // endereco passa a não existir mais, agora existem rua e numero como variaveis
console.log(r, endereco)  // Rua Doutor José { rua: 'Rua Doutor José', numero: 19 }

const localidade = {
    continentes: {
        america: {brasil: 'São Paulo', estadosUnidos: 'California'},
        europa: {frança: 'Paris', austria: 'Belgrado'},
        asia: {china: 'Beijing', japão: 'Tokyo'},
        oceania: {australia: 'caralho', indonesia: 'Capitania'}
    }
    
}
const { 
    continente:{
        america: {brasil, estadosUnidos}, america,
        europa: {frança, austria}, europa,
        asia: {china, japão}, asia,
        oceania: {australia, indonesia}, oceania
    }} = localidade

console.log(america, brasil)