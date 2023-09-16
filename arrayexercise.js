// Array_Exercises

// 1.let people = ["greg", "mary", "devon", "james"];

for(i = 0; i< people.length; i++){
    console.log(people[i])
}
let people = ["greg", "mary", "devon", "james"];
for(i = 0; i< people.length; i++){
    console.log(people[i])
}
// 2. Write the command to remove “Greg” from the array.
// the command to remove the greg from array is by using the people.shift();

// 3.Write the command to remove “James” from the array.
// the command to remove the james is by using the people.pop(); because it is in the back of array 

// 4.Write the command to add “Matt” to the front of the array.

// the command to add is by using people.unshift("matt"); and the matt will come at the beginning of the array. 

// 5.Write the command to add your name to the end of the array.

// we used people.push("kan");
// and my name will appear at the end of array 

//  6.Using a loop, iterate through this array and after 1. console.log-ing “Mary”, exit from the loop.

for(let k =0; i< people.length; k++){
    if(k > 1){
        break;
    }
    console.log(people[k]);
}

// 7.Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.

// we used command people.slice(2);

// 8.Write the command that gives the indexOf where “Mary” is located.

// we used command people.indexOf("mary");

// 9. Write the command that gives the indexOf where “Foo” is located (this should return -1).



// that should be people.indexOf("foo");

// 10.Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");


// 11.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

let withBod = people.concat("Bob");