function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let firstNum = "";
let secondNum = "";
let operatorSelected = false;

let operator =  document.getElementsByClassName("opBtn");

for (let j=0; j<operator.length; j++){
    operator[j].addEventListener("click", function(){
        if (operator[j].textContent !== "="){
            operatorChosen = operator[j].textContent;
            operatorSelected = true;
        }
        else{
            operate()
         
        }

    })
}

function operate(){
    if (operatorChosen === "+"){
       result = add(parseInt(firstNum), parseInt(secondNum));
       displayValue.textContent = result; 
    }
    else if (operatorChosen === "-"){
        result = subtract(parseInt(firstNum), parseInt(secondNum));
        displayValue.textContent = result; 
    }
    else if (operatorChosen === "*"){
        result = multiply(parseInt(firstNum), parseInt(secondNum));
        displayValue.textContent = result; 
    }
    else if (operoperatorChosenator === "/"){
        result = divide(parseInt(firstNum), parseInt(secondNum));
        displayValue.textContent = result; 
    }
}

let displayValue = document.getElementsByTagName("p")[0];

const numberButton = document.getElementsByClassName("number");
for (let i = 0; i<numberButton.length; i++){
    numberButton[i].addEventListener("click", function(){
       
        if (!operatorSelected){
            firstNum += numberButton[i].textContent;
  
            displayValue.textContent = firstNum; 
        }
        else {
            secondNum += numberButton[i].textContent;
            displayValue.textContent = secondNum; 
        }
    })
}

