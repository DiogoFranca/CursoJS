// Função construtora --> objetos
// Função fabrica --> objetos
// Construtora --> Pessoa (new) : inicia um nome de um função construtora com letra maiúscula, para identificar que é uma funçaõ cons. e que precisa usar a palavra reservada new.

// Isso aqui seria tipo mode como aqueles de bolo.
function Pessoa(nome, sobrenome) {
    // O corpo da função já vai ser o objeto automaticamente.
    
    // Na função construtora não precisa de vírgula para separar os métodos e os atributos.

    // Essas estruturas embaixo: são considerados Métodos e atributos privados, porque não temos acesso ao escopo fora do objeto.
    const ID = 1471384;
    const metodo = function() {
        return ID - 1000000;
    }

    metodo()

    // ---------------------------------

    // Como utilizamos a palavra this, esses atributos e métodos são considerados públicos, porque a gente pode acessar fora da função utilizando a notação dos pontos.
    this.name = nome;
    this.sobrenome = sobrenome;

    this.fala = () => console.log(this.name + " " + this.sobrenome + " "+ 'sou um método.');
}

// Para criar novos objetos vindo desse mode(Pessoa) usamos palavra reservada new.

// A palavra new cria um objeto vazio, o new faz o this apontar para o objeto vazio, e retorna implicitamente o objeto para variável.
const p1 = new Pessoa('Diogo', 'França');
const p2 = new Pessoa('Breno', 'França');
p1.fala();
