// convertendo o script da calculadora de função fabrica para função construtora

// função construtora criada
function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            };
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            // aqui está sendo capturado o botão pressionado
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    // nessa função será adicionado o valor interno (innerText) do botão
    // mais o que ja estava no display.
    this.addNumDisplay = el => {
        this.display.value += el.innerText

        // aqui ele muda o foco pro display para o foco não ficar no botão
        this.display.focus();
    };

    // nessa função vai setar o valor vazio para o display quando o botão
    // de clear for pressionado.
    this.clear = () => this.display.value = '';

    // nessa função inicia ela está chamando a função captura cliques para
    // inicializar a calculadora
    
    // nessa função del sera retirado um valor só do display.
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    // nessa função reazliza a conta
    this.realizaConta = () => {

        // aqui vai tentar com que o JS avalie o que está no display como
        // código JavaScript
        try {
            const conta = eval(this.display.value);

            // se a conta avaliar como NaN que no caso retorna false
            // vai retornar o conteudo do if
            if (!conta) return alert('conta inválida');

            // se não for false vai jogar o resultado da conta no display
            this.display.value = conta;

        }catch(e) {
            // se der algum erro vai retornar como conta invalida
            alert('conta inválida');
            return;
        };
    };
};

// aqui foi criada uma nova instãncia do objeto
const calculadora = new Calculadora();

// aqui está sendo chamado o método inicia
calculadora.inicia();