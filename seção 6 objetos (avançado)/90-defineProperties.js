function Produto(nome, preco, estoque) {
/**
    @primeiro argumento do método é o objeto / this em que sera 
    definida a nova propriedade.
    @segundo argumento 'estoque' é a propriedade que está
    sendo definida.
    @terceiro argumento {enumerable, value, writable, configurable} 
    está sendo passa as configurações dessa nova propriedade.
    _____________________________________________________________________
    
    @enumerable - permite que a propriedade possa ser lida, exibida
    em um console.log ou um for in tanto faz, ele recebe um valor 
    true ou false para permitir a tal.

    @value - a propriedade agora não possui valor algum, então value
    vai setar o valor da propriedade criada que no caso é o argumento
    passado no parametro estoque na função.

    @writable - recebe um true ou false, ele vai permitir ou negar
    qualquer alteração feita no valor da propriedade, se true pode-se
    fazer alterações no valor, se false a propriedade fica congelada.

    @configurable - recebe um true ou false, ele vai permitir ou negar
    qualquer configuração que se faça nessa propriedade, ou seja, apagar,
    redefinir quaisquer configurações como enumerable, writable e etc.
*/
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // Mostra a chave
        value: estoque,     // valor da chave
        writable: false,    // pode alterar o valor
        configurable: true  // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome,   
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,   
            value: preco,     
            writable: false,    
            configurable: true
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)