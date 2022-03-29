let n = 5;
let array = [3, 3, 4, 4, 7, 8] 

let hash = {};
array.forEach(element => {
    if(hash[element]){
        hash[element]++
    }else{
        hash[element] = 1
    }
})

console.log(hash)

let elements = []

for(let key in hash){
    elements.push({
        key: key,
        value: hash[key]
    })
}

const storedbyArray = elements.sort((a, b) => {
    if(a.value == b.value){
        return b.key -a.key
    }
    return b.value - a.value
}).forEach(ele => {
    console.log(ele.key)
})