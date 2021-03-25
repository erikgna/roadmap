function fizzBuzz(valor){
    if (typeof valor != 'number'){
        return 'não é um número'
    }
    else if (valor%3 == 0 && valor%5 == 0) {
        return 'FizzBuzz'
    }
    else if (valor%3 != 0 && valor%5 != 0) {
        return valor
    }
    else if (valor%3 == 0){
        return 'Fizz'
    }
    else if (valor%5 == 0) {
        return 'Buzz'
    }
}

console.log(fizzBuzz(13))