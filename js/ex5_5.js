const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""
let numContas = 0
let valorTotal = 0

frm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const desc = frm.inDesc.value
    const valor = Number(frm.inValor.value)
    numContas++
    valorTotal += valor
    resposta+= desc+ " - R$" + valor.toFixed(2) +"\n"

    resp1.innerText = resposta+ "===================="
    resp2.innerText = `${numContas} Conta(s) - R$: ${valorTotal.toFixed(2)}`

    frm.inDesc.value = ""
    frm.inValor.value = ""
    frm.inDesc.focus()


})