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
let operatorChosen = "";
let operatorSelected = false;

let operator =  document.getElementsByClassName("opBtn");

let displayValue = document.getElementsByTagName("p")[0];

for (let j=0; j<operator.length; j++){
    operator[j].addEventListener("click", function(){
        let operatorText = operator[j].textContent;

        if (operatorText === "CLR"){
            firstNum = "";
            secondNum = "";
            operatorSelected = false;
            operatorChosen = "";
            result = null;
            displayValue.textContent = "";
        }
        else if (operatorText === "=") {
            operate();
            operatorSelected = false;
        }
        else{ if(firstNum && secondNum){
            operate();
        }
            operatorChosen = operatorText;
            operatorSelected = true;
        }
    })
}

function operate(){
    if (operatorChosen === "+"){
       result = add(parseInt(firstNum), parseInt(secondNum));
    }
    else if (operatorChosen === "-"){
        result = subtract(parseInt(firstNum), parseInt(secondNum));    }
    else if (operatorChosen === "*"){
        result = multiply(parseInt(firstNum), parseInt(secondNum));
    }
    else if (operatorChosen === "/"){
        result = divide(parseInt(firstNum), parseInt(secondNum));
    }
    displayValue.textContent = result; 

    firstNum = String(result);
    secondNum = "";
    operatorSelected = false;
}



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

