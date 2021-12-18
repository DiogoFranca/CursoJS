// Produto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia
}
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}



const produto = new Produto("Gen", 190);
const camiseta = new Camiseta('Regata', 12, 'black');
const caneca = new Caneca('Cana', 111, 'Plástico');
caneca.aumento(10);




























// // Linkar os prototypes de Produto e camiseta.
// Camiseta.prototype = Object.create(Produto.prototype)
// Camiseta.prototype.constructor = Camiseta

// Camiseta.prototype.aumento = function (percentual) {
//   this.preco = this.preco + this.preco * (percentual / 100)
// }

// function Caneca(nome, preco, material, estoque) {
//   Produto.call(this, nome, preco);
//   this.material = material;

//   Object.defineProperty(this, 'estoque', {
//     enumerable: true,
//     get: function() {
//       return estoque;
//     },
//     set: function(valor) {
//       if(typeof valor !== 'number') return;
//       estoque = valor;
//     }
//   });
// }


// Caneca.prototype = Object.create(Produto.prototype);
// Caneca.prototype.constructor = Caneca;

// const caneca = new Caneca('Luisona', 37, 'aço', 19);
// const camiseta = new Camiseta('Regata', 50, 'preta')
// const produto = new Produto('Gen', 111);
// console.log(caneca);
// console.log(camiseta);
// console.log(produto)

















