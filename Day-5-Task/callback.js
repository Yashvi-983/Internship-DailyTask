//callback function

function perform(c){
    console.log('Performing callback')
    c()
}

function callbackfunction(){
    console.log('Executing callback...')
}

perform(callbackfunction)
