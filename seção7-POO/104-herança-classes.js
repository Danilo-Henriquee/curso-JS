class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        };

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        };

        this.ligado = false;
    }
}

// extends para herdar tudo de Dispositivo
class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        // super para herdar os atributos que a super classe recebe
        super(nome);

        this.cor = cor;
        this.modelo = this.modelo;
    }
    ligar() {
        console.log('Você alterou o método ligar')
    }
}
const s1 = new Smartphone('Samsung', 'preto', 'S10');
console.log(s1)