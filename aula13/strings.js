/* Como adicionar aspas duplas dentro de aspas duplas */ 

// let umaString = "um \"texto\"" 
// console.log(umaString);

/* Escape e outra exibida */

// let umaString = "um \\texto";
// console.log(umaString)


/* Strings são indexadas */
//               01234567
// let umaString = 'roma O rato roeu a roupa do rei de roma.';
// console.log(umaString.charAt(-1)); /*Passa argumento que vai ser a posição, */

// console.log(umaString + " em um lindo dia");
// console.log(`${umaString} em um lindo dia`)
// console.log(umaString.concat(' em', ' um', ' lindo', ' dia')); /* Concat serve para concatenação/é pouco usado */

/* indexOf: qual indíce começa a palavra  */
/* lastIndexOf: começa de trás pra frente.*/

// console.log(umaString.indexOf('T', 4));
// console.log(umaString.lastIndexOf('x', 3));

/*  .match(): Retornar uma array com a letras separadas*/

//console.log(umaString.match(/[a-z]/g)); //expressão regular

/* .search(): Retorna o índice da primeira letra mínuscula*/

//console.log(umaString.search(/[a-z]/));

/* .replace(): trocar uma string por outra;*/
// obs: usando expressão consegimos alterar todas as letras iguais por outro caracter.

//console.log(umaString.replace(/nananana/g, '#'));

// Pegar o tamanho de uma string
//console.log(umaString.length)

// Fatiar uma string
// console.log(umaString.slice())
// console.log(umaString.slice(2))
// console.log(umaString.slice(-5, -1)) // -1 = umaString.length - 1
// console.log(umaString.substring(umaString.length - 5, umaString.length - 1))

// Dividir as strings e colocar em um array
//console.log(umaString.split(' '))

// Transformar em letras maiúscula ou minúscula

// console.log(umaString.toUpperCase());
// console.log(umaString.toLowerCase());











