// Segunda maneira de criar um array, porém pouco usado.
// const nomes = new Array('Eduardo', 'Maria', 'Joana');

// a palavra chave delete é uma boa como quer remover uma elemento, mas não quer mudar as indexações.
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes[2] = 'João';
// delete nomes[2];
// console.log(nomes);


// Conceito de spred serve para copiar um dado estrutural como object e array.
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes];
// novo.pop();
// console.log(nomes);

// O indíce final não conta no slice.
const nomes = ['Eduardo', 'Maria', 'Joana', 'Goku', 'Vegeta', 'Bulma'];
const novo = nomes.slice(0, 3);
console.log(novo);

