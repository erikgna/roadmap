const mouse = {
    cor: 'red',
    marca: 'razer'
}

mouse.speed = 5000
mouse.changeDPI = function(){
    console.log('trocando DPI')
}
console.log(mouse)
delete mouse.speed
delete mouse.changeDPI
console.log(mouse)