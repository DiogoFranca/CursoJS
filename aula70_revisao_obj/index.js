// const pessoa ={
//   nome: 'Luiz',
//   sobrenome: 'Otávio'
// };

// const chave = 'sobrenome';
// console.log(pessoa['sobrenome']);
// console.log(pessoa[chave]);

/*******************************************************/

// const pessoa1 = new Object();
// pessoa1.nome = 'Sasuke';
// pessoa1.sobrenome = 'Uchiha';

// delete pessoa1.nome;
// console.log(pessoa1);


/*******************************************************/

// const pessoa1 = new Object();
// pessoa1.nome = 'Sasuke';
// pessoa1.sobrenome = 'Uchiha';
// pessoa1.idade = 19;
// pessoa1.concatenaNomes = function() {
//   return this.nome + " " + this.sobrenome;
// };
// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa1.concatenaNomes());
// console.log(pessoa1.getDataNascimento());

// for(let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

/*******************************************************/

// Factory functions / Constructor functions / classes


// # Factory functions

// function criaPessoa(name, sobrenome) {
//   return {
//     name,
//     sobrenome,

//     get nomeCompleto() {
//       return `${this.name} ${this.sobrenome}`;
//     }
//   };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

/*******************************************************/

// Constructor functions 

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Object.freeze(this) => podemos congelar um objeto e até mesmo arrays.
  // return this; implicitamente retorna o this.
}

const p1 = new Pessoa('Diogo', 'França');
Object.freeze(p1);
p1.idade = 'oi';
console.log(p1);
// A palavra chave new cria um objeto vazio, atrela o this ao objeto, e retorna, tudo isso embaixo dos panos.





