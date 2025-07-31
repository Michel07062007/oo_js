// • Crie uma classe de uma abstração;

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

// • Crie pelo menos três instâncias de objetos;

// • No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.

// • Envie o link do repositório através da plataforma. 


// Classe abstrata Animal
class Animal {
    constructor(fazerSom, movimento) {
        this.fazerSom = fazerSom;
        this.movimento = movimento;
            console.log("O animal " + this.fazerSom + " Enquanto " + this.movimento);
    }
}

class Leao{
    constructor(Rugir) {
        this.Rugir = Rugir;

        Animal.call(this, movimento);

        console.log(this.Rugir + ": Rugi o Leão orgulhoso enquanto " + this.movimento);
    }
}

class Senhor{
    constructor(Fugir) {
        this.conversar = conversar;

        Animal.call(this, movimento);

        console.log(this.conversar + ": diz o homem alegre" + this.movimento);
    }
}

const Animal1 = new Animal("Late", "corre");
const Leao1 = new Leao("Roar!!!", "corre");
const Senhor1 = new Senhor("Oi moça, que bom vela por aqui", "estático");


console.log(Animal1);
console.log(Leao1);
console.log(Senhor1);