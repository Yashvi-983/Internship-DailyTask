//Build a calculator using objects, function an loop

const calculator = {
    add : function(num1, num2){
        return num1 + num2
    },
    sub : function(num1, num2){
        return num1- num2 
    },
    mul : function(num1, num2){
        return num1* num2
    },
    div : function(num1, num2){
        if(num2 === 0){
            return "Cannot be divided by zero"
        }
        return num1/ num2
    }
}

while(true){
    let num1 = Number(prompt('Enter first number:'))
    let opr = prompt('Enter operator(+,-,*,/): ')
    let num2 = Number(prompt('Enter second number:' ))
    let result
    
    if (opr === '+'){
        result = calculator.add(num1, num2)
    }
    else if (opr === '-'){
        result = calculator.sub(num1, num2)
    }
    else if (opr === '*'){
        result = calculator.mul(num1, num2)
    }
    else if (opr === '/'){
        result = calculator.div(num1, num2)
    }
    else{
        result = 'Invalid operator'
    }
    
console.log('Result is ',result)

let again = prompt('Play again?')
if (again === 'no' || again === 'NO'){
    break;
}

}

// let taskName = prompt('Enter Task Name')
// let taskDesc = prompt('Enter Task Description')
// let start_date = prompt('Enter Starting Date')
// let end_date = prompt('Enter Ending Date')

// if (taskName === '' && taskDesc === ''){
//     alert('Enter this fields')
// }

// if(start_date === ''){
//     let current_date = new Date()
//     start_date = current_date
// }
// if(end_date === ''){
//     let next_date = new Date() 
//     end_date = next_date.setDate(next_date.getDate())
//}

// const taskDetails = () => {
//     let taskName = prompt('Enter Task Name')
//     let taskDesc = prompt('Enter Task Description')
//     if (taskName === ''){
//         alert('Task Name is mandatory. Please enter this field')
//     }
//     if( taskDesc === ''){
//         alert('Task Description is mandatory. Please enter this field')
//     }
// }


// const taskDates = () => {
//     let start_date = prompt('Enter Starting Date')
//     let end_date = prompt('Enter Ending Date')
    
//     if(start_date === ''){
//         let current_date = new Date()
//         start_date = current_date
//         console.log(start_date.toDateString())
//     }
    
//     if (end_date === ''){
//         let curr_date = new Date()
//         curr_date.setDate(curr_date.getDate() + 1)
//         console.log(curr_date.toDateString())
//     }
// }


// const createUser = () => {
    
//     for(let uniqueID = Math.floor(Math.random() + 1; uniqueId++){
//         taskDetails()
//         taskDates()
//     }
   
// }
// createUser()

// if( ){
//             throw new Error('Task Description is mandatory. Please enter this field')
//         }
