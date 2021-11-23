function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, 'e', {
    enumerable: true,
    configurable: true,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if(typeof valor !== 'number') {
        throw new TypeError('Erro, valor inválido.');
        return;
      }

      estoquePrivado = valor;
    }
  });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.e = 'asjsakfhfasf';
console.log(p1);

// Get geralmente serve para pegar o valor e exibir na tela, no Object.property(properties) não precisa do value e writable.

// Já o set vai servir pra configurar esse valor.

// No geral, utilizamos get e setters para interceptar os valores atribuidos a uma propriedade.