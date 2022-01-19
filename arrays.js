//Ejercicio 1. Parte 1: There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

var personas= ["Sofía","David", "Juan"];

//Parte 2: Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

personas.push("Sara", "Agustín");
console.log(personas);

//Parte 3: It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

personas.splice(2,0, "Renata");
personas.push("Elena");
console.log(personas);

//Ejercicio 2: Write a JavaScript program to construct the following pattern, using a nested for loop.

var x,y,z;
for(x=1; x <=6; x++)
{
for (y=1; y < x; y++)
    {
    z=z+("*");        
    }
console.log(z);
z='';    
}

//Ejercicio 3: Write while loops to do the following: 1. Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

var x = 5;
while (x>=0){

console.log(x);
x=x-0.5
}

//Print all the odd numbers between 1 - 100.

var x = 1;
while (x<=100){
    if (x%2 != 0) {
    console.log(x);
    }  
    x++;
}

//Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

var x=1;
while (x<=8){
    console.log("["+ x +"]");
    x++;
}

//Write a method with a while loop that computes the sum of first n positive integers:  sum = 1 + 2 + 3 + … + n Examples: n = 5 sum = 15 ; n = 19 sum = 190

var n = 0
var x = 0

while(n<10){
    n++;
    x+=n
}
console.log(x);
