//!!!!!!!!!!JS JUST (LOOP FOR) ASSIGNMENT 10 =QUESTIONS!!!!!!!//


//!!!!!!!!====Q1: Write a loop to print numbers from 1 to 10.//!!!!!!!!!!=====

for (var i = 1;  i<= 10; i++) {
    document.write("<h1> " + i + "</h1>")
}



//!!!!!!!!====Q2: Write a loop to print even numbers from 1 to 20.//!!!!!!!!!!=====

for( var i = 1;    i<11;  i++){
    document.write(   i*2 + "<br>" )
}



// // !!!!!!!!====Q3:Write a loop to print odd numbers from 1 to 15..//!!!!!!!!!!=====
for(  var i =0;   i<=7;  i++     ){
    document.write( i+1+i + "<br>"                   )
}


//!!!!!!!!====Q4:Write a loop to calculate and print the factorial of a number (let's say 5)...//!!!!!!!!!!=====
for(var i = 1;  i<=100; i++){
    document.write(  i*5 +"<br>"        )
}




//!!!!!!!!====Q5://!!!!!!!!!!=====Write a loop to print the multiplication table of a number (let's say 7) up to 10

for( var i = 1;   i<=10;     i++     ){
    document.write(i+"*"+ 7+"="+ i*7 +"<br>")
}




// // // !!!!!!!!====Q6://!!!!!!!!!!=====
// // Write a loop to find and print the sum of digits of a number (let's say 123).

var num = 123;
var sum = 0;
document.write("Number : " + num + "<br/>")
while (num != 0) {
    sum += num % 10;
    num = parseInt(num / 10);
}
document.write("Sum of Digits Number : " + sum)



// !!!!!!!!====Q7://!!!!!!!!!!=====.Write a loop to print the multiplication table of a number (let's say 5) up to 10.
 for( var i =1;   i<=10;   i++ ){
  document.write(    i+"*"+ +5 +"="+ i*5+"<br>" )
 }



//!!!!!!!!====Q8://!!!!!!!!!!=====Write a loop to print the reverse of a string (let's say "hello")
for(var i = 1;   i<=1;  i++  ){
    document.write(i   +" )  " + "Hello!")
}

// /!!!!!!!!====Q:9//!!!!!!!!!!=====Write a loop to print the square of numbers from 1 to 10.

for(var i = 1;   i<11; i++){
    document.write(   i+"*"+ i+"=" +i*i+"<br>" )
}

//!!!!!!!!====Q10://!!!!!!!!!!=====
// Write a //loop to find and print the largest element in an array (let's say [3, 7, 2, 9, 5])

for( var i = 1;   i<=10;  i++){
  document.write( i*9    )
}

//THEEND!!!! (10 QUESTIONS SOLVED FOR LOOP BASIC EXECISE)!!!!