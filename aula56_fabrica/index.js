// - Quando temos uma função dentro de um objeto chamamos de método.

// - This vai se referir ao objeto.


// - Factory function (função fábrica);
// - Constructor function (Função construtura);

// - Dica: separar os métodos por espaço pra deixar mais organizado.

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, // nome é um atributo
        sobrenome, // é um atributo

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }, // - Permite um "falso" atributo ser setando como um atributo. Ademias, o setter trabalha em conjunto com o getter, porém são independentes, contudo não faz muito sentido por N motivos.

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        } // imc é um método, porém quando usa get fingi ser um atributo, na programação isso se chama getter, porém não podemos alterar valor como se fosse um atributo de verdade, o get apenas fingi e obtem o valor.
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
