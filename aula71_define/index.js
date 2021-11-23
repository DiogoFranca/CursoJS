// Object.difineProperty - defineProperties

// O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

// Object.defineProperty(obj, prop, descriptor)


// Object.difineProperty 

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, 'estoque', {
//     enumerable: true, // Mostra a chave;
//     value: estoque, // Adicionar valor na propriedade.
//     writable: true, // Pode alterar
//     configurable: true, // Configurável
//     // Se configura... estiver como falso nem pode apagar a chave ou reconfigurar.

//   });

//   // P...: objeto que vai mecher, propriedade que queremos trabalhar, um objeto literal.
// }

// const p1 = new Produto('Camiseta', 30, 93);
// console.log(Object.keys(p1)); // Retorna um array com todas as chaves do objeto.

// for(let chave in p1) {
//   console.log(chave);
// }

// defineProperties


function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: true, 
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: false
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: false
    }
  })
}

const p1 = new Produto('Camiseta', 30, 93);
console.log(p1);