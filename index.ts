// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

[
  [0x0,0x1,0x2,0x3],
  [0x4,0x5,0x6,0x7],
  [0x8,0x9,0xa,0xb],
  [0xc,0xd,0xe,0xf],
]

const solve = (board: SudokuBoard) => {
  const depthMap = new Map()

}

class SudokuBoard {
  board: number[][]
  width: number
  height: number
  subdivisionWidth: number
  subdivisionHeight: number

  constructor(boardMatrix: number[][]) {
    this.board = boardMatrix
    this.width = boardMatrix.length
    this.height = boardMatrix.length
    this.subdivisionWidth = Math.floor(Math.sqrt(this.width))
    this.subdivisionHeight = Math.floor(Math.sqrt(this.height))
  }

  valueAt(x, y) {
    return this.board[y][x]
  }

  getRow(y: number) {
    const set = new Set()
    for (let i = 0; i < this.width; i++) {
      set.add(this.valueAt(i, y))
    }
    return set
  }

  getColumm(x: number) {
    const set = new Set()
    for (let i = 0; i < this.height; i++) {
      set.add(this.valueAt(x, i))
    }
    return set
  }

  getSquare(x, y) {
    
  }
}