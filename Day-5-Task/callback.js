//callback function

function perform(c){
    console.log('Performing callback')
    c()
}     

function callbackfunction(){
    console.log('Executing callback...')
}
                       
perform(callbackfunction)


function add(a, callback){      
    let result = a + 4
    callback(result)
}

add(2, sum => console.log(sum))