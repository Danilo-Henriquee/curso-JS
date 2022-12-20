/*
métodos estáticos servem somente para atuar dentro da classe 
eles não tem relação nenhuma com os métodos que as instâncias
tem acesso, são como funções que são executadas para chegar a
um resultado.
*/ 
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {

    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)