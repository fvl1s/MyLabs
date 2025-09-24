function random(min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }

  min = Math.ceil(min)
  max = Math.floor(max)

  if (min > max) {
    let t = min
    min = max
    max = t
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(random(5))
console.log(random(2, 5))
console.log(random(-2, 2))
console.log(random(3, 1))
