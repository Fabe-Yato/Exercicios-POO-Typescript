import { Animal } from "./animal";

export class Cachorro extends Animal{

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
        super(nome, idade)
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
    latir(): void {
        console.log(`O ${this.nome} late: auau`)
    }
    correrAtrasMoto(): void {
        console.log(`O ${this.nome} pode correr até 68km/h`)
    }
    comer(): void {
        console.log(`O ${this.nome} come: carnes, rações e frutas`)
    }
}