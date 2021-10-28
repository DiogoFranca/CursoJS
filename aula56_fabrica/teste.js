function mostraNaTela() {
  return {
    body: document.querySelector('body'),

    escreva() {
      this.body.style.cssText = 'background: red;';

      document.addEventListener('click', () => {
        console.log(this);
      });
    },

  }
}

const user = mostraNaTela();
user.escreva();