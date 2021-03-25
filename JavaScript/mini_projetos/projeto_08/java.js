let notas = [70,70,80]

function aprovacao(mediaTotal){
    if (mediaTotal < 60){
        return 'F'
    }
    if (mediaTotal >= 60 && mediaTotal < 70){
        return 'D'
    }
    if (mediaTotal >= 70 && mediaTotal < 80){
        return 'C'
    }
    if (mediaTotal >= 80 && mediaTotal < 90){
        return 'B'
    }
    if (mediaTotal >= 90 && mediaTotal <=100){
        return 'A'
    }
}

function calcularMedia(array){
    media = 0;
    mediaTotal = 0;
    for(let i = 0; i<array.length; i++){
        media = media+array[i]
    }
    mediaTotal = media/array.length
    return mediaTotal
}

console.log(aprovacao(calcularMedia(notas)))