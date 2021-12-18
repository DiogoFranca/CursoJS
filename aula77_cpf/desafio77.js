const input = document.querySelector('#input-cpf')
const btn = document.querySelector('#btn-validar')

btn.addEventListener('click', () => {
  const cpf = new ModifyCpf(input.value)
  const digitOne = firstDigit(cpf.nineDigits(cpf.cpfArray))
  const digitTwo = secondDigit(digitOne)
  validaCpf(digitOne[0], digitTwo, cpf.cpfLimpo);

})

function ModifyCpf(cpf) {
  this.cpf = cpf
  this.cpfLimpo = this.retiraPontos()
  this.cpfArray = this.converterEmArray(this.cpfLimpo)
}

ModifyCpf.prototype.retiraPontos = function () {
  const cpfLimpo = this.cpf.replace(/\D+/g, '')
  return cpfLimpo
}

ModifyCpf.prototype.converterEmArray = function (cpfLimpo) {
  return Array.from(cpfLimpo)
}

ModifyCpf.prototype.nineDigits = function (cpfArray) {
  return cpfArray.slice(0, 9)
}

function firstDigit(arrayNineDigits) {
  const tenNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2]
  const total = arrayNineDigits
    .map((valor, index) => {
      return valor * tenNumbers[index]
    })
    .reduce((ac, v) => {
      return (ac += v)
    }, 0)

  const firstDigit = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11)

  return [firstDigit, arrayNineDigits]
}

function secondDigit([digitOne, array]) {
  const newArray = array.concat(String(digitOne))
  const tenNumbers = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

  const total = newArray
    .map((val, index) => {
      return val * tenNumbers[index]
    })
    .reduce((ac, val) => {
      return (ac += val)
    }, 0)

  const digitTwo = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11)

  return digitTwo
}

function validaCpf(one, two, cpf) {
  const digit = String(one) + String(two);
  const digitosFinaisDoCpf = cpf.split('').splice(-2, 2).join('');
  if(digit === digitosFinaisDoCpf) {
    alert('CPF válido!')
    cleanInput()
  } else {;
    alert('CPF inválido, tente mais tarde');
    cleanInput()
  }

}

function cleanInput() {
  input.value = '';
}