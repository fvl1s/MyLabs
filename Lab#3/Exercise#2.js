function generateKey(length, characters) {
  let result = ""
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length)
    result += characters[index]
  }
  return result
}

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
console.log(generateKey(24, characters))
