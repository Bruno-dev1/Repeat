const frm = document.querySelector("form")
const resp1 =document.querySelector("#OutDiv")
const resp2 =document.querySelector("#OutNum")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const div = Number(frm.inNumb.value)
     let resposta =""
     let soma = 0
     for(i=1;i <= div/2;i++){
        if(div % i ==0){
            resposta += i+" "
            soma += i
        }
     }
     resp1.innerText= `Os divisores de ${div} são:${resposta} a soma é(${soma})`
    if (soma == div){
        resp2.innerText =`O Número ${div} é perfeito`
    }else{
       resp2.innerText =`O Número ${div} Não é perfeito`
 
    }
})