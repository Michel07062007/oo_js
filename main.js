// • Crie uma classe de uma abstração;

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

// • Crie pelo menos três instâncias de objetos;

// • No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.

// • Envie o link do repositório através da plataforma. 


// Classe abstrata Animal
// Classe abstrata Animal

class Animal {
    constructor(fazerSom, movimento) {
        this.fazerSom = fazerSom;
        this.movimento = movimento;
        console.log("O animal " + this.fazerSom + " enquanto " + this.movimento);
    }
}


// Classe Leao que herda de Animal
class Leao extends Animal {
    constructor(fazerSom, movimento) {
        super(fazerSom, movimento); // chama o construtor da classe Animal
        console.log(fazerSom + ": Ruge o Leão orgulhoso enquanto " + this.movimento);
    }
}


// Classe Senhor que herda de Animal
class Senhor extends Animal {
    constructor(fazerSom, movimento) {
        super(fazerSom, movimento);
        console.log(fazerSom + ": diz o homem alegre enquanto " + this.movimento);
    }
}


// Instâncias
const Animal1 = new Animal("Late", "corre");
const Leao1 = new Leao("Roar!!!", "anda");
const Senhor1 = new Senhor("Oi moça, que bom vê-la por aqui", "estático");


// Exibição dos objetos
console.log(Animal1);
console.log(Leao1);
console.log(Senhor1);
