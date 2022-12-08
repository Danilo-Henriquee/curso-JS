function ValidaCPF(cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}
ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.lenght !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    console.log(cpfArray)
}

const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.cpfLimpo);
console.log(cpf.valida());