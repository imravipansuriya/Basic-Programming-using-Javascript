/*
=========
PROBLEM 1
=========

You are provided with a number, "N". Find its factorial.
Input Description: 
A positive integer is provided as an input.
Output Description: 
Print the factorial of the integer.
Sample Input :
5
Sample Output :
120
*/

var factorial = 5;
var number = 1;

for (var i = 1; i <= factorial; i++) {
    number = number * i
}

console.log(number)


/*
=========
PROBLEM 2
=========

You are given with a number "N", find its cube.
Input Description:
A positive integer is provided as an input.
Output Description:
Find the cube of the number.
Sample Input :
2
Sample Output :
8
*/



function cube(n) {
    console.log(n * n * n)
}
cube(2)

/*
=========
PROBLEM 3
=========

The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the
triangle. You are provided with the side "a". Find the area of the equilateral triangle.
Input Description:
The side of an equilateral triangle is provided as the input.
Output Description:
Find the area of the equilateral triangle and print the answer up to 2 decimal places
after rounding off.
Sample Input :
20
Sample Output :
173.21 
*/
 
function triangle(a){
    return (Math.sqrt(3))*(a*a)/4;
}
 
let triangleside = triangle(20)
console.log(triangleside)
 

173.20508075688772

/*
=========
PROBLEM 4
=========

You will be provided with a number. Print the number of days in the month
corresponding to that number.
Note: In case the input is February, print 28 days. If the Input is not in valid range
print "Error".
Input Description:
Input n -> month number
Output Description:
Find the days in the month corresponding to the input number. Print Error if the input
is not in a valid range.
Sample Input :
8
Sample Output :
31
*/

var sun = 8;

switch (sun) {
    case 1:
        console.log("31");
        break;
    case 2:
        console.log("28");
        break;
    case 3:
        console.log("31");
        break;
    case 4:
        console.log("30")
        break;
    case 5:
        console.log("31")
        break;
    case 6:
        console.log("30")
        break;
    case 7:
        console.log("31")
        break;
    case 8:
        console.log("31")
        break;
    case 9:
        console.log("30")
        break;
    case 10:
        console.log("31")
        break;
    case 11:
        console.log("30")
        break;
    case 12:
        console.log("31")
        break;
    default:
        console.log("Error")
        break;
}

/*
=========
PROBLEM 5
=========

You are given with a number A i.e. the temperature in Celcius. Write a program to
convert this into Fahrenheit.
Note: In case of decimal values, round-off to two decimal places.
Input Description:
A number is provided in Celcius as the input of the program.
Output Description:
The output shall be the temperature converted into Fahrenheit corresponding to the
input value print up to two decimal places and round off if required.
Sample Input:
12
Sample Output:
53.60 
*/

function Fahrenheit(celcius){
    console.log((celcius*1.8)+ 32);
}
Fahrenheit(12)

/*
=========
PROBLEM 6
=========

Write a code to get an integer N and print the sum of values from 1 to N.
Input Description: 
A single line contains an integer N.
Output Description: 
Print the sum of values from 1 to N.
Sample Input :
10
Sample Output : 55
*/

var plush = 10;
var numberOne = 0;

for(let c = 1;  c <= plush; c++){
    numberOne = numberOne + c;
    
}
console.log(numberOne);

/*

=========
PROBLEM 7 
=========

You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,
36, 49, 64, 81, .......
(Print "Error" if N = negative value and 0 if N = 0).
Input Description:
An integer N is provided to you as the input.
Output Description:
Find the Nth term in the provided series.
Sample Input :
18
Sample Output :
324

*/

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
  


/*
=========
PROBLEM 8
=========
- Let "A" be a string. Remove all the whitespaces and find it's length.
(Print "Error" if N = negative value and 0 if N = 0).
Input Description: 
A string is provide as an input
Output Description: 
Remove all the whitespaces and then print the length of the remaining string.
Sample Input :
Lorem Ipsum
Sample Output :
10
*/


let string = "Lorem Ipsum";

    
if(string <= 0){
    console.log("Error")
}
else{
    console.log((string.replace(/\s/g,'').length))
}
    

/*
=========
PROBLEM 9 
=========
You are given the coefficients of a quadratic equation in order A, B & C.
Where A is the coefficient of X2, B is the coefficient of X and C is the constant
term in the most simplified form.
Example: For X2 + 5X + 6 = 0, you are given the input as: 1 5 6.
Write a program to find all of the roots of the quadratic.
Note: The output should be up to 2nd decimal place (round off if needed) and in case
of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-
b-√(b² -4ac)} / 2a
Input Description: 
Three numbers corresponding to the coefficients of x(squared), x and constant are
given as an input in that particular order
Output Description: 
Print the two values of X after rounding off to 2 decimal places if required.
Sample Input:
1 5 6
Sample Output:
-2.00 -3.00 

*/

      
function validate() {
        
    var a = 1;
    var b = 5;
    var c = 6;

            
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
            
           console.log(x1, x2);
}

validate()


/*
==========
PROBLEM 10 
==========

Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements
in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed
are the odd and sorted are the even’. Loki manages to decode the clue which translates
to “sort the even positioned elements of an array, starting from the element at index 0,
in ascending order”. Manipulate the array so as to help Loki steal the tesseract.
Input Description: 
Size of the array followed by the elements of the array
Output Description: 
Even index array elements sorted in ascending order
Sample Input :
5 3 9 1 44 6
Sample Output :
1 9 3 44 6 */

let keys = [5, 3, 9, 1, 44, 6]

let keysArray = keys.filter((value)=>{
    if( value % 2 === 0){
        return true;
    }else{
        return false;
    }
})

console.log(keysArray)

/*
==========
PROBLEM 11
==========
- Given an array of N elements.find the number of occurences of each character and
print it in the decreasing order of occurences, if 2 or more number occurs the same
number of times, print the numbers in decreasing order.
Input Size : |N| <= 100000
Sample Testcase :
INPUT
5
3 3 4 4 7 8
OUTPUT
4 3 8 7
*/

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


/*
==========
PROBLEM 12
==========
Simi is learning about palindromic numbers. Her teacher gave him the task to count
all palindromic numbers present in that range.Simi has told you about this and want
your help. You design an algorithm in order to help simi.
Input Description: 
You will be given a number ‘n’
Output Description: 
Print the count of all palindromic numbers till ’n’(inclusive)
Sample Input :
5
Sample Output :
5 
*/


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

/*
==========
PROBLEM 13
==========
Ajay is given a series(In example).he gone through the series but unable to understand
it properly,he has hired you.Your task is to understand the series and print the series
2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.
Input Description: 
You will be given a number ‘n’
Output Description: 
Print the nth number of series
Sample Input :
5
Sample Output : 
30
 */

  
// let nthArray = [1 , 4, 9, 16, 25, 36, 49, 64, 81, 100]
 

function nthTerm(number){
    
    for(i = 1; i <= number; i++){
        
        console.log(s = (i*i) +i)
    }
  }
nthTerm(5)

 
 /*
PROBLEM 14
You are given with an array. Your task is to print the left rotated array after k
opearations. Time:O(n) Extra Space: O(1)
Input Description: 
First line contains two number ‘n’ and ‘k’.Next line contains n space separated
numbers.
Output Description: 
Print the array as mentioned.
Sample Input :
7 3
1 2 3 4 5 6 7
Sample Output :
4 5 6 7 1 2 3

*/


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





 /*
PROBLEM 15
You are given a postfix expression. Evaluate the given expression and print the result.
Input Description: 
The first line of the input is a string N, containing operators and numbers seperated by
the single space which forms a postfix expression.
Output Description: 
Evaluate the post expression and print the result.
Sample Input :
5 3 1 * + 9 -
Sample Output :
-1
*/