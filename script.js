// Loops Exercise

// 1    Use a For Loop to count from 1 to 7 and have each number display in the console/terminal (You will need a console log for this)

for (i = 1; i <= 7; i++) {
    console.log(i);
}  /*
1
2
3
4
5
6
7
*/


// 2   Use a For Loop to count from 5 to 25 by 4 (Ex: 5, 9, 13, etc.) and have each number display in the console/terminal (You will need a console log for this)

for (i = 5; i <= 25; i +=4) {
    console.log(i);
} /*
5
9
13
17
21
25
*/


// 3a   Create a const variable named wizards and set the value of the variable to the following array items "Harry Potter", "Hermione Granger", and "Ron Weasley"

const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];  /*
[ 'Harry Potter', 'Hermione Granger', 'Ron Weasley' ]
        */ 



// 3b   Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)

for (friends of wizards){
    console.log(friends);
};  /*
Harry Potter
Hermione Granger
Ron Weasley
        */



// 4a   Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).

let harryPotterMovies = 0;

// 4b   Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.

while (harryPotterMovies < 8){
    harryPotterMovies++;
}  


// 4c   After the while loop in your file create a console log to display the value of the harryPotterMovies variable in the terminal (The value should be 8)
// harryPotterMovies = 8
console.log(harryPotterMovies);
/*
0
1
2
3
4
5
6
7
8
*/



// Bonus
// 5a   Create a const variable named hogwartsHouses and set the value of the variable to the following array items "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin".
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff", 
    "Ravenclaw", 
    "Slytherin"
];
     

// 5b   Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).


for (each of hogwartsHouses){

    // Nested Loop
    for (houses of each){
      console.log(houses);
    }
    console.log(`================`);
  };  /*
G
r
y
f
f
i
n
d
o
r
================
H
u
f
f
l
e
p
u
f
f
================
R
a
v
e
n
c
l
a
w
================
S
l
y
t
h
e
r
i
n
        */


// To return the array strings. 
    /*
const hogwartsHouses = [
    ["Gryffindor"],
    ["Hufflepuff"], 
    ["Ravenclaw"], 
    ["Slytherin"]
];
for (each of hogwartsHouses){

    /! Nested Loop!\
    for (houses of each){
      console.log(houses);
    }
  }   
Gryffindor
Hufflepuff
Ravenclaw
Slytherin
        */ 



// 6a   Create a const variable named quote and set the value of the variable to the following array items "Yer", "A", "Wizard", "Harry".
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];


// 6b   Using a loop (You can decide which one you want to use) and the QUOTE array have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)
console.log(...quote);  //  Yer A Wizard Harry

// OR

for(all = 0; all <= 0; all++){
    console.log(quote.join(` `));
};  //  Yer A Wizard Harry

// OR 
let magicQuote = ``;
for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`
}
magicQuote = magicQuote.trim();
console.log(magicQuote);  // Yer A Wizard Harry




// 7   Create a For Loop that displays numbers 1 to 25 (AKA Counts from 1 to 25) in the terminal/console when the file is run. However, for numbers that are multiples of 3 (3, 6, 9, etc.) have the string value of "Expecto" display instead of the number. Also, for numbers that are multiples of 5 (5, 10, 15, etc.) have the string value of "Patronum" display instead of the number. Finally, for numbers that are multiples of 3 & 5 have the string value of "Expecto Patronum" display instead of the number.

for (i = 1; i<=25; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`Expecto Patronum`);
    }
    else if (i % 3 === 0){
        console.log(`Expecto`);
    }
    else if (i % 5 === 0){
        console.log(`Partonum`);
    }
    else {
        console.log(i);
    }
    
}       /*         Inspired by Fizz Buzz  ***
1
2
Expecto
4
Partonum
Expecto
7
8
Expecto
Partonum
11
Expecto
13
14
Expecto Patronum
16
17
Expecto
19
Partonum
Expecto
22
23
Expecto
Partonum
            */

