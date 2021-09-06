// const data = new Date(); // Retorna o horário atual mais data
// console.log(data.toString()); // toString retorna no formato gringo.

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia); // 01/01/1978 Timestamp unix ou época unix == marco zero.
// console.log(data.toString()); 

// const data = new Date(2002, 2); // a, m, d, h, M, s, ms e 0-11 -> meses
// console.log(data.toString());

// const data = new Date('2002-03-13 13:32:23.1000'); // Enviar data em formato string e podemos mandar os milesímos com .valor...
// console.log(data.toString());

const data = new Date('2002-03-13 13:32:23.1000');

console.log(data.getDate()); // Dia do mês
console.log(data.getMonth() + 1); // Mês começa do 0, se quer o real adiciona +1
console.log(data.getFullYear()); 
console.log(data.getHours()); 
console.log(data.getMinutes()); 
console.log(data.getSeconds()); 
console.log(data.getMilliseconds()); 
console.log(data.getDay); // Dia da semana. 0 - domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now); // Data em milliseconds desde o marco zero.


// Aula parou em 22:20





















