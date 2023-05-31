const gs = 5

let n1 = 24
let n2 = 19

let x1 = n1 % gs
let x2 = n2 % gs

let y1 = Math.floor(n1 / gs)
let y2 = Math.floor(n2 / gs)

let distance = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
