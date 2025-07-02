//How can we tell if the code we just wrote is a good code?

//Big O notation helps us understand how long an algorithm will take to run or how much memory it will need as the amount of the data it handles grows.

//O(1) - O(1) constant time, signifies that the execution time an algorithm remains constant regardless of the input size.

//O(n) - linear
const groceries = ["milk","chicken","eggs","fish","meat"];

const searchForItems = (item) => {
    for (let i = 0; i <= groceries.length ; i++){
        if( groceries[i] === item){
            console.log(`found ${item}`);
        }
    }
}

// n + n = 2n
// Drop the constant so it becomes o(n); 
//O(n)+O(n)=O(2n)=> O(n);


searchForItems("fish");
