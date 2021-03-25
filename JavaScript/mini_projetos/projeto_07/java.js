function somar(valor){
    let somaTotal = 0;
    for(let i = 1; i<=valor; i++){
        if(i % 3 == 0) {
            somaTotal = somaTotal+i;
        }
        if(i % 5 == 0) {
            somaTotal = somaTotal+i;
        }
    }
    return somaTotal
}

console.log(somar(1000))