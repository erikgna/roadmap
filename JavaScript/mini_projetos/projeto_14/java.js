let faixa = [
    { tooltip: 'até 700 reais', minimo: 0, maximo: 700 },
    { tooltip: 'até 1000 reais', minimo: 700, maximo: 1000 },
    { tooltip: 'até 1500 reais', minimo: 1000, maximo: 1500 }
]

function CriaFaixa(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
}

let faixa2 = new CriaFaixa(`at[e 2000reais]`, 3203, 32032)
console.log(faixa2)