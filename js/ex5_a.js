const prompt = require('prompt-sync')()
const fruta = prompt("Insira a fruta: ")
const vezes = Number(prompt("O número de vezes a ser repetido: "))

let resp =""
for (i = 1; i <= vezes * 2; i++){
    if (i % 2 == 1){//if impar
        resp+= fruta
    }else{
        resp+= "*"
    }

}
console.log(resp)