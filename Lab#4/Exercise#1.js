const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Введіть числа: ", input => {
  let nums = input.split(" ").map(Number)

  function sum1(...arr) {
    let t = 0
    for (let i = 0; i < arr.length; i++) t += arr[i]
    return t
  }

  function sum2(...arr) {
    let t = 0
    for (let v of arr) t += v
    return t
  }

  function sum3(...arr) {
    let t = 0, i = 0
    while (i < arr.length) {
      t += arr[i]
      i++
    }
    return t
  }

  function sum4(...arr) {
    let t = 0, i = 0
    if (arr.length === 0) return 0
    do {
      t += arr[i]
      i++
    } while (i < arr.length)
    return t
  }

  function sum5(...arr) {
    return arr.reduce((a,b) => a+b, 0)
  }

  console.log("sum1:", sum1(...nums))
  console.log("sum2:", sum2(...nums))
  console.log("sum3:", sum3(...nums))
  console.log("sum4:", sum4(...nums))
  console.log("sum5:", sum5(...nums))

  readline.close()
})
