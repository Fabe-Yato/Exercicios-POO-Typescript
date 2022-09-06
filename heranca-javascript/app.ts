import PromptSync from "prompt-sync";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let prompt = PromptSync()
console.log("Os animais são: ")
console.log(" 1 - Cachorro\n 2 - Cavalo\n 3 - Preguiça")
let animais = prompt("Escolha uma opção: ")

switch(animais){
    case "1":
        cachorro()
        break

    case "2":
       cavalo()
        break

    case "3":
        preguica()
        break
    default:
        console.log("Opção inválida, saindo do programa...")
}

function cachorro(){
    console.log("Você escolheu o Cachorro")

    let nome = prompt("Digite o nome do cachorro: ")
    let idade = Number(prompt("Agora digite a sua idade: "))

    const cachorro = new Cachorro(nome, idade, "Golden", "Dourado", true)

    cachorro.mostrarFicha()
    cachorro.comer()
    cachorro.latir()
    cachorro.correrAtrasMoto()
}

function cavalo(){
    console.log("Você escolheu o Cavalo")

    let nome = prompt("Digite o nome do cavalo: ")
    let idade = Number(prompt("Agora digite a sua idade: "))

    const cavalo = new Cavalo(nome, idade, "shire", "Marrom")

    cavalo.mostrarCaracteristicas()
    cavalo.comer()
    cavalo.relinchar()
    cavalo.correr()
}
function preguica(){
    console.log("Você escolheu o Preguica")

    let nome = prompt("Digite o nome da preguiça: ")
    let idade = Number(prompt("Agora digite a sua idade: "))

    const preguica = new Preguica(nome, idade)

    preguica.mostrarCaracteristicas()
    preguica.comer()
    preguica.somEstranho()
    preguica.subirEmArvores()
}