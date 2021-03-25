function speedChecker(speed){
    if (speed <= 70){
        return 'ok'
    }
    if (speed > 70) {
        let pontos = 0;
        for(let i = 70; i < Math.floor(speed); i = i+5) {
            pontos ++
        };
        if (pontos >= 12) {
            return 'carteira suspensa'
        }
        return pontos
    }
}

console.log(speedChecker(131))