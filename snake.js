import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 10
const snakeBody = [{ x: 11, y: 11}]
let newSegments = 0

export function update() {
    addSegments()
    moveSnake()
}

// draw snake segments
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
} 

export function expandSnake(amount) {
    newSegments += amount
}

// is passed position on a snake
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

// snake intersectioon with itself checking
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// position checking
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// add new segments on a update
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] }
    }
    
    newSegments = 0
}

function moveSnake() {
    // move segments
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // move head
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}