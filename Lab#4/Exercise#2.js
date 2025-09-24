const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

let mat = []
let rowCount = 0

readline.question("Скільки рядків? ", n => {
  rowCount = Number(n)
  let current = 0

  function askRow() {
    if (current < rowCount) {
      readline.question(`Введіть рядок ${current + 1} через пробіл: `, line => {
        mat.push(line.split(" ").map(Number))
        current++
        askRow()
      })
    } else {
      let maxNum = mat[0][0]
      for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
          if (mat[r][c] > maxNum) maxNum = mat[r][c]
        }
      }
      console.log("Макс. елемент:", maxNum)
      readline.close()
    }
  }

  askRow()
})
