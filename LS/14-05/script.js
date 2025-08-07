function generator(){
    const input = document.querySelector("input")
    const value = Number(input.value)
    const ul = document.querySelector(".itens-gerados")
    
    if (Number.isNaN(value))

    for (let i=0; i<value; i++){
        ul.innerHTML += `<li>Itens ${i+1} </li>`
    }
    input.value = ''

}