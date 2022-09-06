import PromptSync from "prompt-sync";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let prompt = PromptSync()
console.log("Os animais são: ")
console.log(" 1 - Cachorro\n 2 - Cavalo\n 3 - Preguiça")
let nome = prompt("Escolha uma opção: ")

switch(nome){
    case "1":
        cachorro()
        break

    case "2":
       cavalo()
        break

    case "3":
        preguica()
        break
}

function cachorro(){
    console.log("Você escolheu o Cachorro")
    const cachorro = new Cachorro("Thor", 5, "Golden", "Dourado", true)
    cachorro.mostrarFicha()
    cachorro.comer()
    cachorro.emitirSom()
    cachorro.correr()
}

function cavalo(){
    console.log("Você escolheu o Cavalo")
    const cavalo = new Cavalo("Zeus", 10, "shire", "Marrom")
    cavalo.mostrarFicha()
    cavalo.comer()
    cavalo.emitirSom()
    cavalo.correr()
}
function preguica(){
    console.log("Você escolheu o Preguica")
    const preguica = new Preguica("Zeus", 10)
    preguica.mostrarFicha()
    preguica.comer()
    preguica.emitirSom()
    preguica.correr()
}