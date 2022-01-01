class Cpf {
  constructor(cpf) {
    this.cpf = cpf.replace(/\D+/g, '');
    this.cpfNoveDigitos = this.cpf.slice(0, 9);
    this.cpfNoveDigitosArray = Array.from(this.cpfNoveDigitos);
  }

}

class Digitos extends Cpf {
  constructor(cpf) {
    super(cpf);
    this.digito1 = this.pegaDigito();
    this.digito2 = this.pegaDigito(this.digito1);
    this.novoCpf = this.novoCpf();
  }

  pegaDigito(digito1) {
    if(digito1) {
      this.cpfNoveDigitosArray.push(digito1);
    }

    let contador = this.cpfNoveDigitosArray.length + 1;
    const total = this.cpfNoveDigitosArray.reduce((acc, v) => {
      acc += v * contador;
      contador--;
      return acc;
    }, 0)

    let digito = 11 - (total % 11);

    if(digito > 9) {
      digito = 0;
    }

    return digito;
  }

  novoCpf() {
    return this.cpfNoveDigitos + this.digito1 + this.digito2;
  }

  validaCpf() {
    if(this.cpf === this.novoCpf) {
      console.log(this.cpf + " " + 'esse cpf é válido.');
    } else {
      console.log(this.cpf + " " + 'esse cpf é inválido.');
    }
  }
}

const validadorDeCpf = new Digitos("070.987.720.03");
validadorDeCpf.validaCpf();

 









