// Object.map() é uma estrutura de dados que é bem diferente de .map();
// Mantêm a ordem de inserção.

// O map é mais perfomático em adição e remoção de itens frequentemente do que objetos.
const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' }
]

// const novasPessoas = {}; // Objeto literal se organiza em order crescente quando é um número.
// for (const pessoa of pessoas) {
//   const {id} = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map(); 
console.log(novasPessoas);
for (const pessoa of pessoas) {
  const {id} = pessoa;
  //setar dados no objeto: (chave, valor)
  novasPessoas.set(id, { ...pessoa });
}

// Obter valor da estrutura map
console.log(novasPessoas.get(3));

// Podemos iterar na estrutura de dados map, retornando um array.
// for (const pessoa of novasPessoas.values()) {
//   console.log(pessoa);
// }

novasPessoas.delete(2);
console.log(novasPessoas);

// Portanto, a estrutura map é útil para usar em momentos que ordem de inserção importa.
