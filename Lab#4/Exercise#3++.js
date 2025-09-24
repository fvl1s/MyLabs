const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Введіть ім'я людини: ", name => {
  readline.question(`Введіть рік народження ${name}: `, born => {
    readline.question(`Введіть рік смерті ${name}: `, died => {
      let age = Number(died) - Number(born)
      console.log(`${name} прожив(ла) ${age} років`)
      readline.close()
    })
  })
})
