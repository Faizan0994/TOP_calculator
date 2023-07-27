//All functions to perform mathematical operations
/////////////////////////////////////////////////////////////
const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const multiply = function(n1, n2) {
    return n1 * n2;
}

const divide = function(n1, n2) {
    return n1/n2;
}

const percent = function(n1, n2) {
    return (n1/n2) * 100;
}

const factorial = function(num) {
	var factorial = 1;
    for (let i = num; i>0; i--) {
        factorial = factorial * i;
    }
  return factorial;
};
/////////////////////////////////////////////////////////

//Global declarations
const selectors = document.querySelectorAll('.selector');
const operations = document.querySelectorAll('.operation');
const upperDisplay = document.querySelector('.upper p');
const lowerDisplay = document.querySelector('.lower p');
var expression = [];
var char;
var operator;
var answer = 0;

const solve = function(n1, n2, operator) {
    if(n1 === 'Ans') n1 = answer;
    if(n2 === 'Ans') n2 = answer;
    if(operator === '+') return add(n1, n2);
    else if(operator === '-') return subtract(n1, n2);
    else if(operator === '*') return multiply(n1, n2);
    else if(operator === '/') return divide(n1, n2);
    else if(operator === '!') return factorial(n1);
    else return 0;
}

//To input numbers
selectors.forEach(button => button.addEventListener('click', (e) => {
    char = e.target.id;
    if(char === 'Ans'){ //for the Ans button
        expression.push(char);
        upperDisplay.textContent = answer;
        lowerDisplay.textContent = expression.join('');
    } else if(char === '.') {//for numbers with decimal point
        if(!expression.includes(char) && expression[expression.length - 1]%1 === 0){
            expression.push(char);
            let index = (expression.indexOf(char));
            lowerDisplay.textContent = expression.join('');
        }
    } else {
        char = +char; //converts every number entered to datatype number
        expression.push(char);
        let index = (expression.lastIndexOf(char));
        if(typeof(expression[index - 1]) === 'number'){//for supporting multidigit numbers
            let currentDigit;
            let lastDigit = index - 1;
            expression[index] = "" + expression[lastDigit] + expression[index];
            expression.splice(lastDigit, 1);
            index--;
            //for converting back to number type
            currentDigit = expression[index];
            currentDigit = +currentDigit;
            expression[index] = currentDigit;
        }
        if(expression[index-1] === '.'){ //for floats
            if(typeof(expression[index - 2]) === 'number' && expression[index-2]%1 === 0){//check if number already has a decimal point
                let currentDigit;
                let lastDigit = index - 2;
                expression[index] = "" + expression[lastDigit] + expression[index-1] + expression[index];
                expression.splice(lastDigit, 2);
                index = index-2;
                //for converting back to number type
                currentDigit = expression[index];
                expression[index] = +currentDigit;
            }
        }
        lowerDisplay.textContent = expression.join('');
    }
    console.log(expression);
}));

//The main calculator
operations.forEach(button => button.addEventListener('click', (e) => {
    char = e.target.id;
    if(char === "=") {//when user hits equal sign
        upperDisplay.textContent = expression.join('');
        for (let index = 0; index < expression.length; index++) {
            if(typeof(expression[index]) === 'string' && expression[index]!=='Ans') {//when operator is identified, identify operands on its both sides
                var op1 = expression[index-1];
                if(isNaN(op1)) op1 = 'Ans';
                var op2 = expression[index+1];
                operator = expression[index];
                answer = solve(op1, op2, operator);
                if(operator === '!') {
                    expression.splice(0,2); //Remove first 2 elements
                }else {
                    expression.splice(0,3); //Remove first 3 elements
                }
                index = -1;
                lowerDisplay.textContent = answer;
            }
        };
    }else if(char === 'AC'){
        expression = [];
        answer = 0;
        lowerDisplay.textContent = "";
        upperDisplay.textContent = "";
    } else {
        if(expression.length == 0) expression.push('Ans');
        expression.push(char);
        lowerDisplay.textContent = expression.join('');
    };
}));