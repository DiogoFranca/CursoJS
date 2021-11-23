/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o,'prop')
... (spread)
 */

// Já vimos
// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties (define várias propriedades)
// Object.defineProperty (define uma propriedade)


// Copiar objeto

const produto = {nome: 'Caneca', preco: 1.8};
const anime = {anime1: 'naruto', anime2: 'dragon ball'};
// // const outraCoisa = {...produto}; // Primeira maneira de se fazer uma cópia: spread operator --> o mais intuitivo.
// // const outraCoisa = Object.assign({}, produto, anime); // (objeto pra onde será armazenada as cópias, os parâmetros em diante são objetos que deseja copiar.)
// const outraCoisa = {nome: produto.nome, preco: produto.preco}; // Terceira maneira de copiar e menos intuitiva.
// console.log(produto);
// console.log(outraCoisa);

// getOwnPropertyDescriptor

// const produto = {nome: 'Caneca', preco: 1.8};
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Esse método retorna um objeto property descriptor.

// Object.values: retorna um array com todos os valores do objeto.

// const produto = {nome: 'Caneca', preco: 1.8};
// console.log(Object.values(produto));

// Object.entries: serve pra ler chaves e valores de um objeto em um array.

// const produto = {nome: 'Caneca', preco: 1.8};

// for(let [chave, valor] of Object.entries(produto)) {
//   console.log(chave, valor);
// }
