let string = "Lorem Ipsum";

    
if(string <= 0){
    console.log("Error")
}
else{
    console.log((string.replace(/\s/g,'').length))
}