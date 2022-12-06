const produto = { nome: 'Produto', preco: 1.8  };

/** 
        O @Primeiro argumento é aonde essas propriedades
    vão ser atribuidas, no caso um objeto vazio.
        O @segundo argumento é o nome do objeto que sera
    copiado pelo método.
        Pode ser colocado quantos objetos eu quiser ali dentro
    que ele irá copiar todos e atribuir ao objeto vazio
    que por sua vez está contido na variavel caneca.
*/
const caneca1 = Object.assign({}, produto, { material: 'Porcelana' });

// para saber qual a configuração da propriedade de um objeto
Object.getOwnPropertyDescriptor(produto, 'nome');
// se quiser saber de todas as propriedades ao mesmo tempo
Object.getOwnPropertyDescriptors(produto);

// para pegar os valores das chaves de um objeto e jogando em um array
Object.values(produto);

// para pegar os valores e as chaves do objeto separados por arrays diferentes
Object.entries(produto);



// _____________________________________________ Relembrando aulas passadas.

// 2 - Mais intuitivo e eficiente
const caneca2 = { ...produto };

// 3 - Mais verboso mas pode ser usado para copiar só uma
// propriedade
const caneca3 = { nome: produto.nome, preco: produto.preco };

// object.keys mostra as chaves do objeto em um array.
const chaves = Object.keys(produto);

// object.freeze congela o objeto, não deixa ele ser alterado
Object.freeze(produto);