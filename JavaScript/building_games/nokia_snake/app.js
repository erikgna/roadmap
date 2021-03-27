document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 // snake position
    let appleIndex = 0 // apple position
    let currentSnake = [2, 1, 0] // snake size, with 2 being head, 0 being tail and 1 being the body, that will increase
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    // start game 
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2, 1, 0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //snakes hitting border and self
    function moveOutcomes() {
        //self
        if (
            (currentSnake[0] + width >= (width * width) && direction === width) || //hit bottom
            (currentSnake[0] % width === width - 1 && direction === 1) || //hit right
            (currentSnake[0] % width === 0 && direction === -1) || // hit left
            (currentSnake[0] - width < 0 && direction === -width) || // hit top
            squares[currentSnake[0] + direction].classList.contains('snake') // hit self
        ) {
            return clearInterval(interval) // clear the interval if some above happens
        }

        const tail = currentSnake.pop() // removes last index of snake
        squares[tail].classList.remove('snake') // removes class of snake from tail
        currentSnake.unshift(currentSnake[0] + direction) //gives direction to head

        //deals with snake getting apple
        if (squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            score +=
                scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
    }
    //generate new apple
    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
    }


    // control snake
    function control(e) {
        squares[currentIndex].classList.remove('snake') //remove snake from all the squares

        if (e.keyCode === 39) { //right
            direction = 1
        } else if (e.keyCode === 38) { // up
            direction = -width
        } else if (e.keyCode === 37) { // left
            direction = - 1
        } else if (e.keyCode === 40) { // down
            direction = +width
        }
    }

    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)
})