// Criar um chave privada dentro do seu objeto usando o Symbol, essa função vai gerar um id aleatório.
// const _velocidade = Symbol('_velocidade');

// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   set velocidade(valor) {
//     if(typeof valor !== 'number') return;
//     if(valor >= 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   get velocidade() {
//     return this[_velocidade];
//   }

//   acelerar() {
//     if(this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }

//   freiar() {
//     if(this[_velocidade] <= 100) return;
//     this[_velocidade]--;
//   }
// }

// const c1 = new Carro('Fusca');

// for(let i = 0; i <= 200; i++) {
//   c1.acelerar();
// }

// c1.velocidade = 100000;
// console.log(c1);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Diogo', 'França');
console.log(p1);
console.log(p1.nomeCompleto)