// do-while loop
console.log("Do-while loop")
let i =0
do{
    i += 1;
    console.log(i)
}while(i < 10)

// while loop
console.log("while loop")
let j = 0
while(j <= 30){
    console.log(j)
    j += 2;
}

//for loop
console.log("for loop")
let numbers = [12,23,34,56,77]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

//for in loop
console.log("for in loop")
const user = {name: 'yashviii', age: 19}
for(let key in user){
    console.log(`${key} : ${user[key]}`)
} 


//for of loop
console.log("for of loop")
const set = new Set([10,29,39,48,58])

for(let value of set){
    console.log(value);
    
} 

//nested loop
function multiply(num1) {
    for(let i = 0; i < num1.length; i++){
        for(let j = 0; j < num1[i].length; j++){
          console.log(num1[i][j])
        }
    }
}
multiply([[1,2],[3,4],[5,6,7]])




