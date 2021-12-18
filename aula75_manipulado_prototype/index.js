// Quando cria um objeto literal, por baixo dos panos, o javascript faz uma chamada da função construtora, que um new Object, e como toda função construtora, tem atrelada um prototype(Object.prototype). Com isso, automaticamente o objeto litera, tem um propriedade interna que faz referência ao Object.prototype.

// Obs: não modificar o __proto__ de um objeto, prejudica na performace, por exemplo, __proto__: variável.

// Object.prototype é o pai de todos os objetos.

// Um objeto literal é a mesma coisa do que (new Object).

// OBS: NÃO É RECOMENDÁVEL MEXER COM __PROTO__ POR QUESTÕES DE DESEMPENHO!!!! Mas se precisar pegar algum proto use: Object.getPrototypeOf();

// new Object -> Object.prototype -> 
// const objA = {
//   chaveA: "A"
//   //__proto__: Object.prototype(é como se fosse assim);
// }

// const objB = {
//   chaveB: 'B'
// }

// const objC = {
//   chaveC: 'C'
// }

// // Configura o prototype: (objeto que quer configurar, pegar o seu prototype para o outro obj);
// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// // Pegar o prototype
// console.log(Object.getPrototypeOf(objB));

// console.log(objA);
// console.log(objB);
// console.log(objC);

//====================================================================================================================

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}


// Então, sabemos que é pouco perfomático criar os métodos dentro da função construtora, o melhor a se fazer é por no prototype da função.

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(100);
console.log(p2.preco);

// Outra maneira de mudar setar o prototype de outro objeto em um objeto.

//                 (seta o prototype de outro objeto, propertyDescriptorMap para criar as chaves) 
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 20
  },

  tamanho: {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 43
  }
});

p3.aumento(10);
console.log(p3.preco);


