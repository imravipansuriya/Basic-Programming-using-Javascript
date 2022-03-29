
let nthArray = [1 , 4, 9, 16, 25, 36, 49, 64, 81, 100]

function nthTerm(number){
    if(number <= 0){
        console.log("Error")
    }
    else{
        let term
        term = number*number
        console.log(term)
    }
  }
nthTerm(18)
  