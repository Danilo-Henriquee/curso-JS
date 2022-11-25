function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliceBotoes();
            this.clearDisplay();
            this.pressEnter();
        }, 
        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keycode === 13) {
                    this.equalBtn();
                }
            });
        },
        equalBtn(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida')
                    return;
                }
                this.display.value = String(conta);
            }catch(e) {
                alert('Conta inválida');
                return;
            }
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);   // aqui vai ser o valor que está no display
        },
        clearDisplay() {
            this.display.value = '';
        },
        cliceBotoes() {
            document.addEventListener('click', function(event){
                const el = event.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);              // innerText irá pegar o valor que está dentro do botão para inserir no display.
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.equalBtn();
                }
            }.bind(this));                                          // function(){}.bind(); está importando o this exeterno do objeto calculadora.
        },                                                          // se eu quisesse usar o this externo do objeto sem ter alteração poderia se
        btnParaDisplay(valor) {                                     // usar arrow function pois ela não faz a troca do this, porém se eu quisesse
            this.display.value += valor;                            // usar o this do document teria problema.
        },
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();