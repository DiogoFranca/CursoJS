/*
 Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 te, 1.80 de altura e seu IMC é de 25.925925925992592959
 Luiz Otávio nasceu em 1980
 */

const nome = 'Luiz Otávio';
const familyName = 'Miranda';
const age = 30;
const weight = 84;
const height = 1.80;

let indiceDeMassaCorporal;
let anoNascimento;
let currentDate = new Date();

indiceDeMassaCorporal = weight / (height ** 2);
anoNascimento = currentDate.getFullYear() - age;

console.log(`${nome} ${familyName} tem ${age} anos, pesa ${age} kg`);
console.log(`tem ${height} de altura e seu IMC é de ${indiceDeMassaCorporal.toFixed(1)}`);
console.log(`${nome} ${familyName} nasceu em ${anoNascimento}.`);

