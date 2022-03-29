let o = 7;
let k = 3;
let arraytwo = [1, 2, 3, 4, 5, 6, 7]


for(let j = 1; j <= k; j++){
    let temp = arraytwo[0];
    for(let i = 0; i < o - 1; i++){
        arraytwo[i] = arraytwo[i + 1]
    }
    arraytwo[o - 1] = temp;
}
console.log(arraytwo)

