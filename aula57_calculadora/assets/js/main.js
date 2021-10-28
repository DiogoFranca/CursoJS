function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            // O this aqui é o document, pois quem chamou foi o mesmo.

            // INFORMAÇÃO IMPORTANTE: As arow functions não mudam o comportamento do this, portanto a arrow function não permite alteração do this, por exemplo, nesse caso da calculadora o this sempre será objeto da calculadora.
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); // É o texo do botão lá no html.
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }


            }); // .bind(this) Esse método serve para utilizar o this da calculadora invés do document.

        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();