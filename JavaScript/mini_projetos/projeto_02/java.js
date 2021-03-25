function maiorNumero(n1, n2){
    if (n1 > n2){
        return n1;
    }
    else if (n2 > n1){
        return n2;
    }
    else {
        return 'São iguais'
    }
}

console.log(maiorNumero(23, 23))