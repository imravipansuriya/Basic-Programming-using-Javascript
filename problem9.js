function validate() {
        
    var a = 1;
    var b = 5;
    var c = 6;

            
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
            
           console.log(x1, x2);
}

validate()
