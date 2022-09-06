export class Animal {
    protected nome : String
    protected idade: Number

    constructor(
        nome: String,
        idade: Number
    ){
        this.nome = nome
        this.idade = idade
    }

    fazerSons(){
        console.log("Animal fazendo sons")
    }

    corre(){
        console.log("Animal está correndo")
    }

}