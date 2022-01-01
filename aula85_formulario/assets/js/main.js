class ValidaFormulario {
  constructor() {
    // Pegou o formulário
    this.formulario = document.querySelector('.formulario');
    // Inicia eventos
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    })
  }

  // Impende que o formulário seja enviado.
  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.campoSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');

    };

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }
  campoSaoValidos() {
    let valid = true;

    // Remover mensagem de error
    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    // Valida se os campos estão preenchidos corretamente.
    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;
      if(!campo.value) {
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
        valid = false;
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }
      
    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if(!usuario) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome do usuário precisa conter apenas letras  e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido');
      return false;
    }

    return true;
  }

  // Cria div e adiciona mensagem para jogar após o elemento input.
  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    // Método top que adiciona elemento após o input.
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();