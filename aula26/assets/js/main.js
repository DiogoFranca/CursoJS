function calcularImc(){
    const form = document.querySelector('form');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const result = document.querySelector('#result');

    function fazerCalculo(event){
        event.preventDefault();

        const imc = Number(peso.value) / (Number(altura.value) ** 2);
        console.log(Number(imc.toFixed(1)));
        
        if(imc < 18.5){
            result.innerHTML = `Seu imc é de ${imc.toFixed(1)}(abaixo do peso).`;
            result.classList.remove('green');
            result.classList.remove('yellow');
            result.classList.add('red');
        } else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = `Seu imc é de ${imc.toFixed(1)}(peso normal).`;
            result.classList.remove('red');
            result.classList.remove('yellow');
            result.classList.add('green');
        } else if (imc >= 25 && imc <= 29.9 ) {
            result.innerHTML = `Seu imc é de ${imc.toFixed(1)}(sobrepeso).`;
            result.classList.remove('green');
            result.classList.remove('red');
            result.classList.add('yellow');
        } else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML = `Seu imc é de ${imc.toFixed(1)}(obesidade grau 1).`;
            result.classList.remove('green');
            result.classList.remove('red');
            result.classList.add('yellow');
        } else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML = `Seu imc é de ${imc.toFixed(1)}(obesidade grau 2).`;
            result.classList.remove('green');
            result.classList.remove('yellow');
            result.classList.add('red');
        } else if(imc > 39.9){
            result.innerHTML = `Seu imc é de ${imc.toFixed(1)}(obesidade grau 3).`;
            result.classList.remove('green');
            result.classList.remove('yellow');
            result.classList.add('red');
        } else {
            result.innerHTML = `Valor digitado é inválido`;
            result.classList.remove('green');
            result.classList.remove('yellow')
            result.classList.add('red');
        }
    }

    form.addEventListener('submit', fazerCalculo);

    // function mostrarResultado(){

    // }
}

calcularImc();