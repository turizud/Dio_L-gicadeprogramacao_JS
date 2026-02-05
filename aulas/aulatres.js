class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

       
        if (this.tipo.toLowerCase() === "mago") {
            ataque = "magia";
        } else if (this.tipo.toLowerCase() === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo.toLowerCase() === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo.toLowerCase() === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
