//criando a array usamos ----------------

//             0       1       2       3
const nome = ['eita', 'mano', 'caiu', 'tudo']

console.log(nome)
console.log(nome[0])
console.log(nome[1])
console.log(nome[2])
console.log(nome[3])


//Como substituir um indice dentro do array----------------


const nome = ['eita', 'mano', 'caiu', 'tudo']
nome[0] = 'ish' //'eita' passa a ser 'vish'
console.log(nome[0])


//adicionar um novo indice no array----------------


const nome = ['eita', 'mano', 'caiu', 'tudo']
nome[4] = 'vish' //'tudo', 'vish'
console.log(nome)


//como saber o tamanho do array----------------


const nome = ['danilo', 'caio', 'lucas', 'nicolas']
console.log(nome.length)


//como adicionar elementos no array no final----------------

const nome = ['danilo', 'caio', 'lucas', 'nicolas']
nome[nome.length] = 'lilly' //adiciona lilly no final 'nicolas, 'lilly'
nome[nome.length] = 'medrano'
nome[nome.length] = 'gustavo'
console.log(nome)


//ou


const nome = ['danilo', 'caio', 'lucas', 'nicolas']
nome.push('medrano') //adiciona no final 'nicolas', 'medrano'
nome.push('lilly')
nome.push('gustavo')
console.log(nome)



//como adicionar no começo


const nome = ['danilo', 'caio', 'lucas', 'nicolas']
nome.unshift('luiz') //vai adionar  luiz no começo 'luiz', 'danilo' o elemento 0 agora é luis e danilo passa a ser 1
console.log(nome)


//COMO RETIRAR DO FINAL


const nome = ['danilo', 'caio', 'lucas', 'nicolas'] 
const removido = nome.pop() //vai retirar 'nicolas' e guardar o elemento removido em uma variavel ou constante
console.log(nome)
console.log(removido)


//retirar do começo


const nome = ['danilo', 'caio', 'lucas', 'nicolas'] 
nome.shift()
console.log(nome) //retirou danilo



//retirar um elemento sem alterar os indices


const nome = ['danilo', 'caio', 'lucas', 'nicolas'] 
delete nome[1]
console.log(nome[1])


//se eu querer saber de elemento até um elemento


//             0         1       2        3
const nome = ['danilo', 'caio', 'lucas', 'nicolas']
nome.push('luis')
nome.push('sandra')
console.log(nome.slice(0, 6)) //[ 'danilo', 'caio', 'lucas', 'nicolas', 'luis', 'sandra' ] 
console.log(nome.slice(0, 2)) //[ 'danilo', 'caio' ] ele vai contar do elemento abaixo do 2 e não o 2 também
console.log(nome.slice(0, -1)) //[ 'danilo', 'caio', 'lucas', 'nicolas', 'luis' ] com um numero negativo vou subtrair o ultimo elemento e a sandra sera removida


//um array é reconhecido como object pela engine, portanto para saber se é uma array usamos


const nome = ['danilo', 'caio', 'lucas', 'nicolas']
console.log(typeof nome) //object
console.log(nome instanceof Array) //True pq é um Array
