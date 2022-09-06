import { Animal } from "./animal";

export class Cachorro implements Animal{

    nome:String
    idade: Number
    private raca: String 
    private corPelo: String
    private vacinado: Boolean

    constructor(
        nome: String,
        idade: Number,
        raca: String,
        corPelo: String,
        vacinado: Boolean
    ){
        this.nome = nome
        this.idade = idade
        this.raca = raca
        this.corPelo = corPelo
        this.vacinado = vacinado
     }

    mostrarFicha(): void {
        console.log(
            `
            Nome: ${this.nome}
            Idade: ${this.idade}
            Raça: ${this.raca}
            Cor do pelo: ${this.corPelo}
            Vacinado: ${this.vacinado}\n`
        )
    }
    emitirSom(): void {
        console.log(`O ${this.nome} late: auau`)
    }
    correr(): void {
        console.log(`O ${this.nome} pode correr até 68km/h`)
    }
    comer(): void {
        console.log(`O ${this.nome} come: carnes, rações e frutas`)
    }
}