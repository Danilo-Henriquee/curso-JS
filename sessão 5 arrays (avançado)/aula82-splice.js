const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
/*
    para remover um elemento preciso passar como argumento
    no primeiro parametro de qual indice irá começar a remover
    e quantos irão ser apagados
*/  
const removidos = nomes.splice(2, 3)
/*
    o primeiro argumento falou qual o indice que ele começara
    a apagar que no caso é o 2 'Eduardo'.
    o segundo argumento disse quantos serão apagados no caso 3
    então os 3 indices contando com o indice colocado no primeiro
    argumento serão apagados então 'Eduardo', 'Gabriel', 'Julia'
    foram removidos.    
*/

// simulando os métodos com splice

// unshift() - adiciona no começo 
nomes.splice(0, 0, 'Bernardo')

// shift() - remove no começo
nomes.splice(0, 1)

// push() - adiciona no final
nomes.splice(nomes.length, 0, 'Henrique')

// pop() - remove no final
nomes.splice(-1, 1);





