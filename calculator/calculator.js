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

function power(a, b) {
	return a**b;
}

function factorial(num) {
	let i = num;
	let total = num;
	while (i>1) {
		i--;
		total *= i;
	}
	if (num === 0) {return 1};
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}