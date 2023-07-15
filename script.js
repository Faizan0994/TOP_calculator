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
var expression = [];
var char;
var operator;
var answer = 0;

//To input numbers
selectors.forEach(button => button.addEventListener('click', (e) => {
    char = e.target.id;
    char = +char; //converts every number entered to datatype number
    expression.push(char);
}));

//The main calculator
operations.forEach(button => button.addEventListener('click', (e) => {
    char = e.target.id;
    if(char === "=") {//when user hits equal sign
        console.log(expression.join(' '));
        for (let index = 0; index < expression.length; index++) {
            if(typeof(expression[index]) === 'string') {//when operator is identified, identify operands on its both sides
                var op1 = expression[index-1];
                var op2 = expression[index+1];
                operator = expression[index];
                answer = add(op1, op2);
                expression.splice(0,3,answer); //replace first 3 elements with their answer
                index = -1;
            }
        };
        console.log(answer);
    } else {
    expression.push(char);
    };
}));