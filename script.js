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