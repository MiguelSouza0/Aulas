
const arry = [[1,10,2],[2,10,2],[3,10,2],[4,10,0]]
let total = 0
for(let i = 0; i < arry.length; i++){
    total += arry[i][1] * arry[i][2]
    if(arry[i][2]>0){
        console.log("ID: ",arry[i][0]," Preço: ",arry[i][1])
    }
    else{
        arry.splice(i,1)
    }
}
console.log("Valor Total: ",total)
console.log(arry)
console.log("Reiniciando...")
arry = [[1,10,2],[2,10,2],[3,10,2],[4,10,0]]
console.log("Programação funcional")
let resultado = 0
arry.forEach(
    (item) => resultado += item[1]*item[2]
)
console.log(resultado)
console.log(arry.map(
    (item) => `ID: ${item[0]}, Preço ${item[1]}, Quantidade: ${item[2]}`
))

arry.reduce(
    (somatorio, valorProximo) => somatorio + valorProximo, 0
)