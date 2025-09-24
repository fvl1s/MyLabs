const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Введіть IP: ", ip => {
  let bytes = ip.split(".").map(Number)
  let num = bytes.reduce((acc, val, i) => acc + (val << ((3 - i) * 8)), 0)
  console.log(num)
  readline.close()
})
