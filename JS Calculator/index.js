var calculatorScreen
var darkMode = false
var calculatorOperator
var calculatorResult
var calculatorFirstNumber
var calculatorSecondNumber
var buttonOne = 1
var buttonTwo = 2
var buttonThree = 3
var buttonFour = 4
var buttonFive = 5
var buttonSix = 6
var buttonSeven = 7
var buttonEight = 8
var buttonNine = 9
var buttonZero = 0
var buttonMultiply = "x"
var buttonSubtraction ="-"
var buttonDivision = "÷"
var buttonAddition = "+"
var buttonResult = "="
document.querySelectorAll("One")[0] = buttonOne;
document.querySelectorAll("Two")[1] = buttonTwo;
document.querySelectorAll("Three")[2] = buttonThree;
document.querySelectorAll("Four")[3] = buttonFour;
document.querySelectorAll("Five")[4] = buttonFive;
document.querySelectorAll("Six")[5] = buttonSix;
document.querySelectorAll("Seven")[6] = buttonSeven;
document.querySelectorAll("Eight")[7] = buttonEight;
document.querySelectorAll("Nine")[8] = buttonNine;
document.querySelectorAll("Zero")[9] = buttonZero;
document.querySelectorAll("Multiply")[10] = buttonMultiply;
document.querySelectorAll("Subtraction")[11] = buttonSubtraction;
document.querySelectorAll("Division")[12] = buttonDivision;
document.querySelectorAll("Addition")[13] = buttonAddition;
document.querySelectorAll("Result")[14] = buttonResult;

calculatorScreen = 0;

function calcMultiply(calculatorFirstNumber, calculatorSecondNumber){
Result=calculatorFirstNumber * calculatorSecondNumber;
}
function calcDivide(calculatorFirstNumber, calculatorSecondNumber){
Result=calculatorFirstNumber / calculatorSecondNumber
}
function calcSubtract(calculatorFirstNumber, calculatorSecondNumber){
Result=calculatorFirstNumber - calculatorSecondNumber
}
function calcAddition(calculatorFirstNumber, calculatorSecondNumber){
Result=calculatorFirstNumber + calculatorSecondNumber
}



document.querySelectorAll("button")[14].addEventListener("click", function calcResult(){

})

function calculator(calculatorFirstNumber, calculatorSecondNumber, operator){
return operator(calculatorFirstNumber, calculatorSecondNumber);
}

document.querySelector(".themeButton").addEventListener("click", function changeTheme(){
    if (darkMode == false){
    document.getElementsByTagName("link")[0].setAttribute("href", "./style dark.css")
darkMode = true}
    else{document.getElementsByTagName("link")[0].setAttribute("href", "./style.css")
darkMode = false;
    }  
    }
)


