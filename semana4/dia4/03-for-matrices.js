//matrices
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let x = 0; x < matriz.length; x++) {
  for (let y = 0; y < matriz[x].length; y++) {
    console.log(`[${x}][${y}] = ${matriz[x][y]}`);
  }
}
