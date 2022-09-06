import { Animal } from "./animal";

export class Preguica extends Animal{

    mostrarCaracteristicas(): void {
        console.log(
            `
             Nome: ${this.nome}
             Idade: ${this.idade}\n`
        )
    }
    somEstranho(): void {
        console.log(`A ${this.nome} faz um som muito estranho quando se sente ameaçada`)
    }
    subirEmArvores(): void {
        console.log(`A ${this.nome} não corre`)
        console.log("Sua velocidade alcança apenas 0,27km/h")
    }
    comer(): void {
        console.log(`${this.nome} pode comer: folhas, frutos e seivas de algumas árvores.`)
    }

}