function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault(); // Previnir que um evento aconteça.
    //     alert(1);
    //     console.log('Foi enviado.');
    // };

    
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

        const adicionarObjeto = function (nome, sobrenome, peso, altura){
            const pessoa = {
                nome: nome, 
                sobrenome: sobrenome, 
                peso: peso, 
                altura: altura};

            pessoas.push(pessoa);
        };

        adicionarObjeto(nome.value, sobrenome.value, peso.value, altura.value);
        console.log(pessoas)
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();