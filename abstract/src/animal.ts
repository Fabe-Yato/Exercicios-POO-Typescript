export abstract class Animal {
    protected nome: String 
    protected idade: Number


    constructor(
        nome: String,
        idade: Number
    ){
        this.nome = nome
        this.idade = idade
    }

    abstract mostrarFicha(): void
    abstract emitirSom(): void
    abstract correr(): void
    abstract comer(): void

}
