function parOrImpar(valor){
    for (let i = 1; i<=valor; i++){
        if (i % 2 == 0){
            console.log(i, 'par')
        }
        else if (i%2 != 0){
            console.log(i,'impar')
        }
    }
}
parOrImpar(10)