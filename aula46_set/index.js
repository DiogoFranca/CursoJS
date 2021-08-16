function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Pôr referência e a função setInterval ela excuta infinitamente.
// setInterval(funcaDoInterval, 1000);

// Usando um função anônima na função.
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// Já o setTimeout excuta apenas um única vez.
setTimeout(function () {
    clearInterval(timer);
}, 3000)

setTimeout(function () {
    console.log('O time acabou aqui!');
}, 4000);
