let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// keyboard listener
window.addEventListener('keydown', e => {
  switch (e.key) {
    // assign keyboard controlls
    // don't allow a snake to reverse on itself
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

// update last input direction
export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
