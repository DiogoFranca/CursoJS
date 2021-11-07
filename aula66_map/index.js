// Dobre os números

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numbersMultiplied = numeros.map(valor => valor * 2);

// console.log(numbersMultiplied);

// O map é quase idêntico ao filter, porém diverge em quê o filter retorna uma valor bolean, e no map usa os valores do array original e retorna uma modificação.

const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

// O map modifica o array.
// Obs: cuidado, você pode está alterando o array original, por referência, para solucinar, lembre do conceito de spread.

// Então, o map altera os valores do array, e retorna um array do mesmo tamanho do original.

const nomesDasPessoas = pessoas.map(obj => obj.nome);
const removeNomes = pessoas.map(obj => ({idade: obj.idade}))
const comIds = pessoas.map((obj, indice) => {
  const newObj = {...obj};
  newObj.id = indice;
  return newObj;
});
console.log(comIds);


// map() mapeia seu array original em outro array, mas não altera o original, cria uma cópia.

