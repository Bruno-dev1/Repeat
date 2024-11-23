const prompt = require("prompt-sync")()
console.log(" Bem vindo ao daycare")
const animal = Number(prompt("Quantos animais? : "))
const anos = Number(prompt("Quantos anos de reprodução: "))
let rep = animal
for (i=1;i<=anos;i++){
    console.log(`${i}º ano: ${rep}`)
    rep= rep * 3
}