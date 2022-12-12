// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// sacar precisa de um valor que é o valor que vai ser sacado.
Conta.prototype.sacar = function(valor) {
    // se o meu saldo for menor que o valor que a pessoa quer sacar.
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// depositar a mesma coisa que o saldo
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

// ver o saldo da conta
Conta.prototype.verSaldo = function() {
    console.log(`Ag/B: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`);
};

// sub class ou classe filha de conta
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
};

// o prototype de CC agora tem os elementos de Conta
CC.prototype = Object.create(Conta.prototype);

// o prototype de CC agora tem o construtor dele que precisa ser colocando manualmente
CC.prototype.constructor = CC;

// a subclasse usou conceitos de polimorfismo onde nessa classe o método funciona de forma
// diferente da original criada pela super classe
CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// sub class ou classe filha de conta
function CP(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
};

// o prototype de CP agora tem os elementos de Conta
CP.prototype = Object.create(Conta.prototype);

// o prototype de CC agora tem o construtor dele que precisa ser colocando manualmente
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 0, 100);
cc.depositar(10)
cc.sacar(110);
cc.sacar(110);

console.log()

const cp = new CP(12, 33, 0)

cp.depositar(10)
cp.sacar(110);
cp.sacar(1);