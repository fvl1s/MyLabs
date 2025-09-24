const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
  einstein: { born: 1879, died: 1955 },
  curie: { born: 1867, died: 1934 },
  lincoln: { born: 1809, died: 1865 },
  shakespeare: { born: 1564, died: 1616 }
}

function ages(obj) {
  let result = {}
  for (let person in obj) {
    result[person] = obj[person].died - obj[person].born
  }
  return result
}

console.log(ages(persons))