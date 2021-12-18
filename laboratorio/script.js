function Animal(nome, peso) {
  this.nome = nome;
  this.peso = peso;
}

Animal.prototype.mostraPropriedades = function() {
  return this.nome + " " + this.peso;
} 

function Coelho(nome, peso, cor) {
  Animal.call(this, nome, peso);
  this.cor = cor;
}

Coelho.prototype = Object.create(Animal.prototype);
Coelho.prototype.constructor = Coelho;

Coelho.prototype.mostraPropriedades = function() {
  return this.nome + ' ' + this.peso + ' ' + this.cor;
}

const animal = new Animal('Foguete', 56);
console.log(animal.mostraPropriedades());

const coelho = new Coelho('Habbit', 30, 'Branco');
console.log(coelho.mostraPropriedades())