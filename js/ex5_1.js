const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNum.value)
  
    for (let i = 1; i <= 10; i++) {
        resp.innerText += numero + " x " + i + " = " + (numero * i) + "\n"
    }
    
})
frm.addEventListener("reset", () => {
    resp.innerText = ""
})