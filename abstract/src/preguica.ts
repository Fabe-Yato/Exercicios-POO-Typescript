import { Animal } from "./animal";

export class Preguica extends Animal{
 
    mostrarFicha(): void {
        console.log(
            `
             Nome: ${this.nome}
             Idade: ${this.idade}\n`
        )
    }
    emitirSom(): void {
        console.log(`A ${this.nome} faz um som muito estranho quando se sente ameaçada`)
    }
    correr(): void {
        console.log(`A ${this.nome} não corre`)
        console.log("Sua velocidade alcança apenas 0,27km/h")
    }
    comer(): void {
        console.log(`${this.nome} pode comer: folhas, frutos e seivas de algumas árvores.`)
    }
}
