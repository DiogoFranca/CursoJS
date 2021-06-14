const choiceNumber = Number(prompt('Digite um número ?'));
const valueSpan = document.querySelectorAll('.value').forEach( span => {
    span.innerHTML = choiceNumber;
})

const raiz = document.querySelector('#raizQuadrada');
const integer = document.querySelector('#integer');
const notNumber = document.querySelector('#NaN');

const floor = document.querySelector('#floor');
const ceil = document.querySelector('#ceil');
const fixed = document.querySelector('#fixed');


raiz.innerHTML = choiceNumber ** 0.5;
integer.innerHTML = Number.isInteger(choiceNumber);
notNumber.innerHTML = Number.isNaN(choiceNumber);

floor.innerHTML = Math.floor(choiceNumber);
ceil.innerHTML = Math.ceil(choiceNumber);
fixed.innerHTML = choiceNumber.toFixed(2);



