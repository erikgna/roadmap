function primos(valor){
    for (let i = 1; i<=valor;i++){
        let primo = true
        if (i != 2 && i !=3 && i !=5){
            if(i%2 == 0){
                primo = false;
            }
            else if(i%3 == 0){
                primo = false;
            }
            else if(i%5 == 0){
                primo = false;
            }
        }
        if (primo == true){
            console.log(i)
        }  
    }
}

primos(33)