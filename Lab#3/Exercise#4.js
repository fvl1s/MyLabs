const iface = {
  line1: x => [x],
  line2: function(x, y) { return [x, y] },
  line3(x, y, z) { return [x, y, z] }
}

let result = []
for (let key in iface) {
  if (typeof iface[key] === "function") {
    result.push([key, iface[key].length])
  }
}

console.log(result)
