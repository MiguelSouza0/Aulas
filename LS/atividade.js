function area(y){
    
    return Math.PI*Math.pow(y,2)

}
export {area}

function triangulo (x1,x2,x3) {
    var menor = Math.min(x1,x2,x3)
    let test_maior = (x1 + x2 + x3) - menor
    let test_menor = (x1 - x2 - x3) + menor
    if (x1 + x2 > x3 && x1 + x3 > x2 && x2 + x3 > x1){
        if(x1 === x2 && x2 === x3){
            return "equilateral"
        }
        else if(menor != test_maior/2 && (x1 === test_maior/2 || x2 === test_maior/2 || x3 === test_maior/2)){
            return "isosceles"
        }
        else{
            return "scalene"
        }
    }
    else{
        return "none"
    }
    }
export {triangulo}

function fibonacci(x) {

    var arry = [0,1]
    for (let i=0; i>x; ++i)
        if (arry[i] == x || arry[i++] == x){
            
        }    
}