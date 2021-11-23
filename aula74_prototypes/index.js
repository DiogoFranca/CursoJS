// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.idade = 19;

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Funcão construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = Funcão construtora

console.dir(pessoa1.idade);
console.log(pessoa2);


// O javascript automaticamente atrela uma propriedade chamada prototype no constructor function. Então, todos os objetos criados pelo CF vai ter likado um propriedade __proto__ que vai ter atributos e métodos que foram criados dentro do prototype, que vão por referência. E qual seria o uso dele ? Vai ajudar na performace do código, por exemplo: imagine que você tem CF e que tem métodos que usa os atributos, e o que quero dizer com isso ? Simples, vai consumi recursos atoar da maquina do cliente, já que vai criar vários objetos, e com isso vários métodos que faz a mesma coisa, parar resolver isso, temos o prototype, com ele podemos criar apenas único método que vai ser usado por referência em todos os objetos criados.


// Mdn explicação

/*
  Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

  Definição de protótipo
  Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

  Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor de JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (oi não) tal membro. */

// Pessoa.prototype === pessoa1.__proto__

// O motor do javascript faz uma busca por um método ou atributo no objeto original, não encontrando, ele passa para a referência interna que é o __proto__ e assim vai até encontrar ou não.

// Data -> Date.prototype -> Object.prototype

// Opa, tudo bem? Arrow functions não permitem alteração do this, por isso não funcionam em nenhum local onde o this precisa ser manipulado. O this na arrow function é sempre o this do local onde ela foi criada... 