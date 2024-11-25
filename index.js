const display = document.getElementById('display');
let isEnabled = false;
let isError = false;

function displayAppend(input) {
    if(isError){
        clearDisplay();
        isError = false;
    }
    display.value += input;
}

function displayAppendB(){
    if(isEnabled){
        display.value += `)`;
        isEnabled = false;
    }
    else{
        display.value += `(`;
        isEnabled = true;
    }
}

function backSpace(){
    display.value = display.value.substring(0, display.value.length - 1);
}

function percent(){
    display.value = display.value / 100;
}

function calculate(){
    let answer = String(eval(display.value));
    console.log(typeof answer, answer)
    try{
        if(answer.length >= 11){
            display.value = `${answer.substring(0, 11)}e`;
        }

        else{
            display.value = `${answer}`;
        }
    }
    catch(error){
        display.value = `Error`;
        console.log(error);
        isError = true;
    }
}


function clearDisplay(){
    display.value = ``;
    isEnabled = false;
}

