import { Animal } from "./animal";

export class Cavalo extends Animal{
    private raca: String
    private cor: String

    constructor(
        nome: String,
        idade: Number,
        raca: String,
        cor: String
    ){
        super(nome, idade)
        this.raca = raca
        this.cor = cor
    }

    mostrarFicha(): void {
        console.log(
            `
             Nome: ${this.nome}
             Idade: ${this.idade}
             Raça: ${this.raca}
             Cor do pelo: ${this.cor}\n`
        )
    }
    emitirSom(): void {
        console.log(`O ${this.nome} relincha`)
    }
    correr(): void {
        console.log(`O ${this.nome} pode chegar até 88km/h`)
    }
    comer(): void {
        console.log(`O ${this.nome} pode comer: capim fresco, feno ou silagem`)
    }
}
