// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 25);

// console.log(pessoa1, pessoa2);


const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

