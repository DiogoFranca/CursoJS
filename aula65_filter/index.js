const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];


// filter() filtra, passa uma peneira no array original, jogando os valores que passaram na peneira pra outro array.


// const nomes = pessoas.map(obj => {
//   const newObj = {...obj};
//   delete newObj.idade
//   return newObj;
// });
// console.log(nomes);
// console.log(pessoas);

// const newPerson = pessoas.filter(valor => valor.idade > 30 && valor.idade <= 50);
// console.log(newPerson);


// Pessoas que tem letra maior ou igual que 5 letras.
// const cincoLetras = pessoas.filter(valor => valor.nome.length >= 5);

// Pessoas que tem idade maior que 50 anos.
// const cincoLetras = pessoas.filter(valor => valor.idade >= 50);
// console.log(cincoLetras);

// const aNoFinal = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a'));
// console.log(aNoFinal);

// Método novo chamado de endsWith() que pega a última palavra da string.

// Filter não altera o array original, e sim, cria um novo array com os valores adicionados.

// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

// Podemos retirar o return no arrow function pois só uma linha, o retorno é implícito, pois o método já faz isso.

// Terceira maneira e mais morderna.
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(valor => valor > 10);


// Segunda maneira

// const numerosFiltrados = numeros.filter(function(valor) {
//   return valor > 10;
// });

// Maneira mais longa

// function callbackFilter(valor) {
//   return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);


// o método filter recebe 3 arguementos sendo ele o valor, índice e o array, e mais louco do filter é que ele itera sobre o array e cria um array novo, sendo que ele fazer após ser retornado se a condição é verdadeira ou falsa para adicionar no array.

// function callbackFilter(valor, indice, array) {
//   if(valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const numerosFiltrados = numeros.filter(callbackFilter)

// function maiorDez() {
//   const maiorQueDez = [];
//   const menorQueDez = [];

//   for(numero of numeros) {
//     if(numero > 10) {
//       maiorQueDez.splice(numeros.length, 0, numero);
//     } else {
//       menorQueDez.splice(0, 0, numero);
//     }
//   }

//   const tudoJunto = maiorQueDez.concat(menorQueDez);

//   return {maior: maiorQueDez, menor: menorQueDez, tudo: tudoJunto};
// }

// const {maior, menor, tudo} = maiorDez();
// console.log(maior);
// console.log(menor);
// console.log(tudo);