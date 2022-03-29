function Palnum(){

    var final = 0;
    var number = 5;

    temp = number;

    while(number>0) {

        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
    }

    if(final==temp) {

        console.log(final);
    }
    else{
        console.log("not palindrome");
    }
 }

Palnum()