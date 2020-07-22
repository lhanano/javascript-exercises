function add (a, b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function sum(array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply (array) {
	array.reduce((accu, val) => result = accu * val);
	return result;
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}