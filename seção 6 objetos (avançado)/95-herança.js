/**
 * Produtos:
 * @Camiseta pode ter cores diferentes.
 * @Caneca pode ter materiais diferentes
 */
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
 
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;
/**
 * o @prototype_Camiseta agora herdou @prototype_produto ,
 * se alterar o @rototype_Produto vai alterar também 
 * o @prototype_Camiseta pois herda o @prototype_Produto ,
 * mas as alterações feitas no @prototype_Camiseta
 * não vão inflingir no @prototype_Produto .
 * 
 * um problema que surge fazendo isso é que o construtor Camiseta
 * não existe mais, quando se cria uma instância Camiseta ela adota
 * o nome do construtor Produto, então para resolver isso
 * manualmente aponta o construtor de camiseta no prototype de
 * camiseta.
 * */ 
function Camiseta(nome, preco, cor) {
    /** 
     * o @this dentro dessa função construtora sera a instância
     * que eu criar usando essa função construtora
     * 
     * método call o primeiro argumento será quem
     * vai ser o this dentro da função Produto no caso
     * é o objeto que a Camiseta cria.
     * */  
    Produto.call(this, nome, preco)
    this.cor = cor;
}
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
const produto = new Produto('Generico', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100)

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function() {
            if (typeof valor !== 'number') return;
            estoque = valor;
        },
        enumerable: true
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;
Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
const caneca = new Caneca('Caneca', 20, 'Plastico', 5)
console.log(caneca);
console.log(camiseta);
console.log(produto);