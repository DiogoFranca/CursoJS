function soma(callback) {
    const soma = 1 + 2;

    callback(soma);
}

soma(resultado => console.log(resultado));