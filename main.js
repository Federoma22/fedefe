const lista = []
 
function sacarpromedio(){
    let promedio=document.getElementById("promedio")
    let numero=document.getElementById("numero")
    let planilla=document.getElementById("planilla")

    lista.push(numero.valueAsNumber)
    let suma=0
    lista.map((elemento)=>{
        suma+=elemento
    })

    let total=suma/lista.length
planilla.innerHTML=``
lista.map((elemento)=>{
planilla.innerHTML+=`<li>${elemento}</li>`
    
    })
promedio.textContent=total
}
