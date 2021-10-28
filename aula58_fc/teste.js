function Inventa(n1, n2) {
  const num1 = n1;
  const num2 = n2;

  this.soma = function() {
    console.log(num1 + num2);
  }

  this.concatena = () => console.log(String(num1) + num2)


}

const resultado = new Inventa(1, 10);
resultado.soma();
resultado.concatena();