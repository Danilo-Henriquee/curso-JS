// Array literal
const nomes = ['Danilo', 'Maria', 'Joana'];


// para remover o ultimo elemento do array
nomes.pop();


// para remover o primeiro elemento do array(todos os indices são realocados)
nomes.shift();


// para adicionar um elemento no final do array
nomes.push('João');


// para adicionar elementos no inicio do array(todos os indices são realocados)
nomes.unshift('Bernardo');


// essa funcionalidade exclui o indice informado mas deixa um buraco no array
delete nomes[2];


// para copiar um array não usa = porque tudo que for modificado no array filho
// irá se refletir no array pai então pode usar o operador rest/spread
const novo_nomes = [...nomes];


//               0             1         2         3         4         5
const nomes2 = ['Papaleguas', 'Coiote', 'Mickey', 'Rosana', 'Cintia', 'Victor'];
// para fatiar um array usa
const novo = nomes2.slice(0, 4);
// os argumentos passados são os indices então se eu quero do inidice 1 ao 2
// o primeiro argumento precisa ser 1 e o segundo 3 porque ele vai pegar de trás
// desse indice, então sempre colocar 1+.


// convertendo uma string em um array
const nome = 'Danilo Henrique Marques'
// esse método ira separar a string pelo caracter que for passado de argumento
// no parametro como nome tem espaço entre o nome e sobrenome ele ira formar 
// um novo indice a cada espaço encontrado
const nomeArray = nome.split(' ')
console.log(nomeArray)

// para transformar um array em uma String
const novoArray = nome.join(' ')
// o argumento do parametro passado vai ser o caracter
// que ira separar os indices do array