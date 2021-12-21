// Primeira maneira e menos perfomática, porque gasta recursos recriando os métodos toda vez que cria um objeto.

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,

//     falar() {
//       console.log(`${this.nome} está falando.`);
//     },

//     comer() {
//       console.log(`${this.nome} está comendo.`);
//     },

//     beber() {
//       console.log(`${this.nome} está bebendo.`);
//     }
//   }
// }

// const p1 = criaPessoa('Luiz', 'Otávio');

// --------------------------------------------------------------------

// Segunda maneira, que é criando um prototype para por os métodos.

// function criaPessoa(nome, sobrenome) {
//   const pessoaPrototype = {
//     falar() {
//       console.log(`${this.nome} está falando.`);
//     },

//     comer() {
//       console.log(`${this.nome} está comendo.`);
//     },

//     beber() {
//       console.log(`${this.nome} está bebendo.`);
//     }
//   }
  
//   return Object.create(pessoaPrototype, {
//     nome: {value: nome, 
//     enumerable: true},
//     sobrenome: {value: sobrenome,
//     enumerable: true}
//   })
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1);

// ----------------------------------------------------------------

// Composição nada mais é quer o ato de compor um objeto com vários outros objetos.

// Terceira maneira, fazendo composição do prototype, pois ainda é um pouco acoplado, e é uma das melhores maneira a se fazer.

// Vamos intuitivamente definir composição como quando a classe usa um outro objeto para proporcionar uma parte ou toda a sua funcionalidade.

/*
  Pensando com Composição é como “ter” um relacionamento. O Ser Humano “tem” a capacidade amamentar, raciocinar e também “tem” pernas e braços e assim por diante.

  Ser Humano = capacidade amamentar + braços + pernas

  Já pensando com Herança “é” como uma relação. O Ser Humano “é” um Mamífero, um Carro “é” um Veículo, Maçã “é” uma Fruta e etc.
  
  Ser Humano < Mamífero
 */

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
}

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome, 
    enumerable: true},
    sobrenome: {value: sobrenome,
    enumerable: true}
  })
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);