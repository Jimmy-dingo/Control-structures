// 1.display in the console the numbers from 1 to 20 

var i = 1;        

while (i <= 20) {      
    console.log(i);    

    i = i + 1;          
}                      

console.log("----------------------------");

// 2.display in the console the odd numbers from 1 to 20

i = 2;                  //Here I re-assign the value of the variable i already declared, to 2

while (i <= 20) {
    console.log(i)

    i = i + 2;          //I sum + 2 so I am gonna log into the console only the odd numbers
}

console.log("----------------------------");

// 3.compute the sum of the elements of an array and display it in the console

var array = [10, 5, 8, 4, 7];

console.log(array[0] + array[1] + array[2] + array[3] + array[4]);      //Method1. I log to the console the sum using the index number of the array

function sumOfElements(elements){                                       //Method2. I use a function that includes a while loop
    var i = 0;
    var sum = 0;
    while (i < elements.length) {
        sum = sum + elements[i];
        i++;
    }
    return sum;
}

console.log(sumOfElements(array));

console.log("----------------------------");

// 4. compute the maximum of the elements of an array and display it in the console 

console.log(Math.max(...array));   //Here I used the array as a parameter since it's already defined, using Spread(...)                            

console.log("----------------------------");  

// 5. compute how many times a certain element appears in an array

array = [5, 8, 7, 10, 5, 18, 20, 10, 15, 5];  // I re-assign the values of the array

function elementsOccurrence(elements, array) {
    var occurrence = 0;                           
    var i = 0;                                   
    while (i < array.length) {                    
        if (array[i] === elements) {              
            occurrence = occurrence + 1;          
    }
    i++;
}
    return occurrence;
}

console.log(elementsOccurrence(5, array));       // returning how many times the number indicated in the parameter of the occurrence that I want to log
// in this case it will log 3 because the value 5 occurs 3 times

console.log("----------------------------"); 

// Challenge - using nested to generate the matrix pattern - nested loop with 2 dimensional array

var matrixGrid = [                                     // 2 dimensional array
    [0, 1, 0, 1],                                      // i = rows ; j = columns
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0]
];

console.table(matrixGrid);                            // Version 1 - logging a table into the console. More readable and clean.


for (var i = 0; i < matrixGrid.length; i++) {         // Version 2 - Using loop inception to display it into the HTML.         
    for (var j = 0; j < matrixGrid[i].length; j++){
        document.write(matrixGrid[i][j]);
    }
    document.write("<br>");                           // using the document.write command.
}