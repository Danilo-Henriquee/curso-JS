// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
    /* 
    o objetivo aqui é tirar tudo que não é numero, então só vai sobrar os numeros.
    aqui está sendo criada uma propriedade cpfLimpo que pode ser manipulada
    é como se fosse uma chave dentro de um objeto.
    */
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
    });
}

// função valida - responsavel por validar, o programa vai iniciar aqui
// Aqui vai ser retornado true ou false, se for true o cpf é valido e vice versa.
ValidaCPF.prototype.valida = function() {
  // se o CPF não for enviado retorna false.
  if(typeof this.cpfLimpo === 'undefined') return false;

  // se o tamanho do CPF for menor que 11 retorna false.
  if(this.cpfLimpo.length !== 11) return false;

  // aqui está verificando se o CPF possui sequencia de numeros oque não pode.
  if(this.isSequencia()) return false;

  // retirando os dois ultimos digitos do cpf.
  const cpfParcial = this.cpfLimpo.slice(0, -2);

  // enviando o cpfParcial que é o cpf formatado para o calculo do primeiro digito.
  const digito1 = this.criaDigito(cpfParcial);

  // envia o cpfParcial mais o primeiro digito para o calculo do segundo digito
  const digito2 = this.criaDigito(cpfParcial + digito1);

  // aqui está concatenando os arrays, os 9 primeiros digitos
  // mais os dois ultimos gerados
  const novoCpf = cpfParcial + digito1 + digito2;

  // aqui vai retornar true ou false, se os digitos gerados forem igual ao CPF original enviado
  // ele retorna true se não false.
  return novoCpf === this.cpfLimpo;
};

/*
esse método ira fazer o calculo dos digitos do CPF.
cpfParcial porque pode receber os 9 digitos para
o calculo do primeiro digito quanto 10 para o 
calculo do segundo digito.
*/ 
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  // formando um array apartir do cpfParcial agora com nome cpfArray
  const cpfArray = Array.from(cpfParcial);

  // aqui esta criando um regressivo que vai começar do 10
  let regressivo = cpfArray.length + 1;

  // realizando a multiplicação dos digitos para para realizar a operação.
  const total = cpfArray.reduce((ac, val) => {
    // o acumulador é igual ao regressivo vezes o valor que são
    // os digitos do CPF, Number pra transformar o digito para numero.
    // a cada iteração o valor do acumulador é concatenado com o resultado
    // da operação.
    ac += (regressivo * Number(val));

    // fazendo com que regressivo conte de frente para trás
    regressivo--;

    // retornando o valor do acumulador
    return ac;

    // garantindo que o acumulador comece de 0.
  }, 0);

  // aqui está fazendo o calculo do digito.
  const digito = 11 - (total % 11);

  // expressão ternaria - se o digito for maior que 9 retorna 0, contrário 
  // disso o próprio digito
  return digito > 9 ? '0' : String(digito);
};

// aqui vai checar se os digitos eles se repetem juntamente
ValidaCPF.prototype.isSequencia = function() {
  // sequencia é igual ao primeiro digito do cpflimpo 
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);

  // se o primeiro caracter repetido 11 vezes for igual ao CpfLimpo 
  // quer dizer que é uma sequencia
  return sequencia === this.cpfLimpo;
};

// aqui é aonde vai ser passado o CPF que deve ser checado.
const cpf = new ValidaCPF('070.987.720-03');

// se o cpf.valida retornar true ou false.
if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}
