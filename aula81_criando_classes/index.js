class Pessoa {

  // Recebe argumentos através desse método especial.
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }


  // Os métodos criados aqui, já são likados automaticamente no prototype da função construtora.

  falar() {
    console.log(`${this.nome} ${this.sobrenome} está falando...`);
  }
}

const pessoa1 = new Pessoa('Diogo', 'França');
console.log(pessoa1.falar());