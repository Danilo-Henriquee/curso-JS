// Segunda forma fazendo de forma mais espalhada
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    },
}
// primeira forma de se acoplar o prototype
const pessoaPrototype1 = { ...falar, ...comer, ...beber }

// segunda forma de se acoplar o prototype
// está sendo criado um objeto vazio pelas chaves vazias 
// e que está indo pra pessoaPrototype2, e os métodos que vão 
// conter nesse objeto 
const pessoaPrototype2 = Object.assign({}, falar, comer, beber)

//_________________________________________________________

function criaPessoa(nome, sobrenome) {
    // primeira forma através de herança
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },
        comer() {
            console.log(`${this.nome} está comendo.`)
        },
        beber() {
            console.log(`${this.nome} está bebendo.`)
        },
    };
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}
const p1 = criaPessoa('Danilo', 'Henrique');
const p2 = criaPessoa('Maria', 'Betina');
console.log(p1.falar())
