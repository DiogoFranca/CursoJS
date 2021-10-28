function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = () => {
        capturaCliques()
        capturaEnter();

    };

    const capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                realizaConta();
            }
        });
    };

    const capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) addNumDisplay(el);
            if(el.classList.contains('btn-clear')) clear();
            if(el.classList.contains('btn-del')) del();
            if(el.classList.contains('btn-eq')) realizaConta(el);
        });
    };

    const realizaConta = () => {
        try {
            const conta = eval(display.value);

            if(!conta) {
                alert('Conta Inválida');
                return;
            }

            display.value = conta;

        } catch(e) {
            alert('Conta inválida.');
        }
    };

    const addNumDisplay = el => {
        display.value += el.innerText
        display.focus();
    };
    const clear = () => display.value = '';
    const del = () => display.value = display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();   