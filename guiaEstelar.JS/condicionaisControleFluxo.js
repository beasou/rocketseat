/*  
    CONTROLE DE FLUXO DA APLICAÇÃO (controle flow)
*/

/* 
    IF ... ELSE
*/
    let temperature = 37.4
    let highTemperature = temperature >= 37.5
    let mediumTemperature = temperature < 37.5 && temperature >= 37

    if(highTemperature){
        console.log("Febre alta")
    }else if(mediumTemperature){
        console.log("Febre moderada")
    }else{
        console.log("Saúdavel")
    }

//--------------------------------------------------------
/* 
    SWITCH
*/
    let expression = ""
    switch(expression){
        case "a":
            //codigo para expressão a
            console.log("a")
            break
        case "b":
            //expressão para expressão b
            console.log("b")
            break
        default:
            console.log("default")
            break
    }

    //exemplo calculadora 
    function calculate(numb1, operator, numb2){
        let result

        switch(operator){
            case '+':
                result = numb1 + numb2
                break
            case '-':
                result = numb1 - numb2
                break
            case '*':
                result = numb1 * numb2
                break
            case '/':
                result = numb1 / numb2
                break
            default:
                console.log("não implementado")
                break
        }
        return result
    }
    console.log(calculate(2,"+",2))
    console.log(calculate(2,"-",2))
    console.log(calculate(2,"*",2))
    console.log(calculate(2,"/",2))
    console.log(calculate(2,"%",2))
    
//--------------------------------------------------------