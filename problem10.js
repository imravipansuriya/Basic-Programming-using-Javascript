let keys = [5, 3, 9, 1, 44, 6]

let keysArray = keys.filter((value)=>{
    if( value % 2 === 0){
        return true;
    }else{
        return false;
    }
})

console.log(keysArray)