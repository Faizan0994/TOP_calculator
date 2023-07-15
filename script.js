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