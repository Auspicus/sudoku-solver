// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class SudokuBoard {
  board: number[][]
  width: number
  height: number
  subdivisions: number
  subdivisionWidth: number
  subdivisionHeight: number

  constructor(boardMatrix: number[][]) {
    this.board = boardMatrix
    this.width = boardMatrix.length
    this.height = boardMatrix.length
    this.subdivisions = boardMatrix.length
    this.subdivisionWidth = Math.floor(Math.sqrt(this.width))
    this.subdivisionHeight = Math.floor(Math.sqrt(this.height))
  }

  valueAt(x, y, val?) {
    if (!val) {
      return this.board[y][x]
    }
    
    this.board[y][x] = val
  }

  possibleForRow(y, val) {
    for (let i = 0; i < this.width; i++) {
      if (this.valueAt(i, y) === val) return false
    }

    return true
  }

  possibleForColumn(x, val) {
    for (let i = 0; i < this.height; i++) {
      if (this.valueAt(x, i) === val) return false
    }

    return true
  }

  possibleForSubdivision(x, y, val) {
    const x0 = Math.floor(x / this.subdivisionWidth) * this.subdivisionWidth
    const y0 = Math.floor(y / this.subdivisionHeight) * this.subdivisionHeight

    for (let x = 0; x < this.subdivisionWidth; x++) {
      for (let y = 0; y < this.subdivisionWidth; y++) {
        if (this.valueAt(x0 + x, y0 + y) === val) return false
      }
    }

    return true
  }

  possible(x, y, val) {
    return (
      this.possibleForRow(y, val)
      && this.possibleForColumn(x, val)
      && this.possibleForSubdivision(x, y, val)
    )
  }

  solve() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.valueAt(x, y) === 0) {
          for (let i = 1; i <= this.width; i++) {
            if (this.possible(x, y, i)) {
              console.log(`(${x},${y}): ${i}`)
              this.valueAt(x, y, i)
              this.solve()
              this.valueAt(x, y, 0)
            }
          }
          return
        }
      }
    }
  }
}

const example = new SudokuBoard([
  [1,2,3,4],
  [4,3,2,1],
  [2,1,0,0],
  [3,4,0,0],
])

const prettyPrint = (board: SudokuBoard) => {
  appDiv.innerHTML += '<hr/>'
  for (let y = 0; y < board.height; y++) {
    // console.log(...board.board[y])
    appDiv.innerHTML += `<div>${[board.board[y].join('|')]}</div>`
  }
}
console.log('Starting board')
prettyPrint(example)

console.log('Solved board')
example.solve()
prettyPrint(example)
