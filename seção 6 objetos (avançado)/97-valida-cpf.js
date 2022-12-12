function validaCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfArrayString = Array.from(cpfLimpo);

    // Transformando os digitos do cpf para numeros inteiros.
    let cpfArray = cpfArrayString.map((digito)  => Number(digito))
    let lastDigits = cpfArray.splice(-2, 2);

    /**
     * @PRIMEIRO DIGITO
     */
    // Multiplicando os digitos por 10 a 2.
    let controlDigit1 = 10;
    const multipleDigit1 = cpfArray.reduce((ac, valor) => {
        ac.push(valor * controlDigit1)

        controlDigit1--;
        return ac;
    }, []);

    // somando todos os resultados das multiplicações 
    const sumDigits1 = multipleDigit1.reduce((ac, val) => {
        ac += val;
        return ac;
    }, 0) 
    cpfArray.push(11 - (sumDigits1 % 11));
    console.log(cpfArray);

    /**
    * @SEGUNDO DIGITO
    */
    // Multiplicando os digitos por 10 a 2.
    let controlDigit2 = 11;
    const multipleDigit2 = cpfArray.reduce((ac, valor) => {
         ac.push(valor * controlDigit2);
         controlDigit2--;
         return ac;
     }, []);
 
    // somando todos os resultados das multiplicações 
    const sumDigits2 = multipleDigit2.reduce((ac, val) => {
         ac += val;
         return ac;
     }, 0);

    // checando os digitos
    if (11 - (sumDigits1 % 11) == lastDigits[0] && 11 - (sumDigits2 % 11) == lastDigits[1]) {
        console.log(`O CPF: ${cpf} é válido.`);
    }else {
        console.log(`O CPF: ${cpf} é inválido.`);
    };
}
validaCPF('578.730.008.42');