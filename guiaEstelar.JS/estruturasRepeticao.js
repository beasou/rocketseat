/* 
    FOR
*/
    for(let i = 10; i >= 0; i--) {
         console.log(i)
    }

    for(let i = 0; i <= 10; i++) {
        if(i === 5){
            break; //para execução
            continue; //pula execução no momento
         }
         console.log(i)
    }

    
//--------------------------------------------------------
/* 
    WHILE
*/
    let i =49002384776435;
    while(i > 10){
        console.log(i)
        i /= 35
    }

//--------------------------------------------------------
/*
    FOR...OF
*/
    let name2 = 'Bea'
    let names=['João','Paulo', 'Pedro']

    for(let char of name2){
        console.log(char)
    }

    for(let name of names){
        console.log(name)
    }