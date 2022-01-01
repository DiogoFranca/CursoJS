class ControleRemoto {
  constructor (tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static soma(x, y) {
    return x + y;
  }
}

// Métodos estáticos são referentes apenas a class, que só pode ser usado dentro dela.

// Estáticos não tem acesso aos atributos e métodos da instância.

// Quando um método não utiliza nenhum this, pode transformar o método em estático.

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.diminuirVolume();
c

console.log(ControleRemoto.soma(10, 20));