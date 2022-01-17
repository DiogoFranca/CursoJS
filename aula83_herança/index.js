// Dica importante: faça no máximo 3 heranças, se não o código vai ficar bastante confuso e frágil.

class DispositivoEletronico {
  constructor(nome, teste) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + " " + 'já ligado.')
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + " " + 'já desligado');
      return;
    }

    this.ligado = false;
  }

  testando() {
    console.log('oioiiiiioi');
  }
}

// A palavra extends que dizer que vai herdar tudo de Dispositivo eletronico.
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    //É igual ao call, serve para passar parâmetros.
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
};

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.')
  }

  falaOi() {
    console.log('oi');
  }
}

const tablet = new Tablet('Samsung', true);
tablet.desligar()
tablet.testando();
