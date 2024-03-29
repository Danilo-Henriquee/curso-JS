class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo' ,{
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    éSequência() {
        // se qualquer caracter se repetir no caso tipo 0 e depois 0
        // é um sequência então vai retornar true.
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let numeroString of cpfSemDigitos) {
            total += reverso * Number(numeroString);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= '9' ? digito : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequência()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}

let validaCPF = new ValidaCPF('070.987.720-03')

if (validaCPF.valida()) {
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}