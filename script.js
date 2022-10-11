const cellElements = document.querySelectorAll('[data-cell]')
const X_CLASS = 'x'
const O_CLASS = 'o'
const board = document.getElementById('board')

const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let oTurn
startGame()
function startGame() {
  oTurn = false
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
}

function handleClick(e) {
  const cell = e.target
  const currentClass = oTurn ? O_CLASS : X_CLASS
  // placeMark
  placeMark(cell, currentClass)
  // check for win
  if (checkWin(currentClass)) {
    console.log(`winner`)
  }
//   console.log(`clicked`)

  swapTurns()
  setBoardHoverClass()
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  oTurn = !oTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(O_CLASS)
  if (oTurn) {
    board.classList.add(O_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  WINNING_COMBO.some(comb => {
    return comb.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
