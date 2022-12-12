/**
 * Quando um objeto é criado de forma literal ele automaticamente
 * está usando a função construtora de objetos, isso serve para
 * tanto para String, numeros, arrays e etc.
 * 
 * const objA {} -> objA = new Object();
 * 
 * como objA é um instância da função construtora Object ele herda
 * o prototype da mesma.
 * 
 * o __proto__ da instância objA é o object.prototype pois foi
 * criada apartir da função construtora de objetos.
 */
const objA = {
    chaveA: 'A'
    //__proto__: object.prototype
};
const objB = {
    chaveA: 'B'
    //__proto__: object.prototype
};
const objC = new Object();
objC.chaveC = 'C';

/**
 * Nesse método eu vou estar setando quem vai ser o prototype dele
 * no caso objB agora tem o prototype de objA, então ele herda tudo
 * que contém no __proto__ do objA.
 * 
 * @Primeiro argumento do método será quem vai ter o prototype 
 * setado no caso é o objB.
 * @Segundo argumento vai ser o novo prototype que objB tera.
 * o __proto__: object.prototype de objB passa agora a ser
 * __proto__: objA . 
 */
Object.setPrototypeOf(objB, objA)

Object.setPrototypeOf(objC, objB)
/**
 * Fazendo isso agora a cadeia é a seguinte:
 * 
 * o objC passa pelo __proto__: objB que depois ele vai para
 * o __proto__: objA e depois ele vai para object.prototype.
 * 
 * Caso eu queira saber o __proto__ de um objeto uso
 */
Object.getPrototypeOf(objC);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};
const p1 = new Produto('Camiseta', 50);
p1.aumento(100)

const p2 = {
    nome: 'Caneca',
    preco: 15
};
/**
 * @p2 não é uma instância criada pela função construtora Produto
 * então não herda o prototype da função, para isso tem
 * que setar manualmente.
 */

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(50)
/**
 * Aqui p2 agora tem o prototype da função Produto sem ser uma
 * instância de Produto, herdou todos os elementos de Produtos.
 */

/**
 * Criando dessa forma o objeto ja herda o prototype de Produto
 * a configuração é opcional não necessita de configuração.
 */
const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Lapis de luxo'
    },
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 100
    }
});
