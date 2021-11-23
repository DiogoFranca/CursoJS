// Quando cria um objeto literal, por baixo dos panos, o javascript faz uma chamada da função construtora, que um new Object, e como toda função construtora, tem atrelada um prototype(Object.prototype). Com isso, automaticamente o objeto litera, tem um propriedade interna que faz referência ao Object.prototype.

// Obs: não utilize o __proto__ dos objetos, prejudica na performace.

// new Object -> Object.prototype -> 
const objA = {
  chaveA: "A"
  //__proto__: Object.prototype(é como se fosse assim);
}

const objB = {
  chaveB: 'B'
}

const objC = {
  chaveC: 'C'
}

// Configura o prototype
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

// Pegar o prototype
console.log(Object.getPrototypeOf(objB));

console.log(objA);
console.log(objB);
console.log(objC);







