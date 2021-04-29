let screen = document.getElementById('screen');
let operations = [];
let values = [];
let value = '';
let lastCalculation = false;

const handleClick = (action) => {
	switch (action) {
		case '+':
			if (values.length === operations.length && values.length >= 1) {
				operations.pop();
				operations.push(action);
			} else if (values.length > operations.length) {
				operations.push(action);
			}

			value = '';
			screen.value = printScreen();
			lastCalculation = false;
			break;
		case '-':
			if (values.length === operations.length && values.length >= 1) {
				operations.pop();
				operations.push(action);
			} else if (values.length > operations.length) {
				operations.push(action);
			}
			value = '';
			screen.value = printScreen();
			lastCalculation = false;
			break;
		case 'x':
			if (values.length === operations.length && values.length >= 1) {
				operations.pop();
				operations.push(action);
			} else if (values.length > operations.length) {
				operations.push(action);
			}
			value = '';
			screen.value = printScreen();
			lastCalculation = false;
			break;
		case '/':
			if (values.length === operations.length && values.length >= 1) {
				operations.pop();
				operations.push(action);
			} else if (values.length > operations.length) {
				operations.push(action);
			}
			value = '';
			screen.value = printScreen();
			lastCalculation = false;
			break;
		case '=':
			screen.value = calculate();
			operations = [];
			values = [screen.value];
			value = screen.value;
			lastCalculation = true;
			break;
		case 'c':
			operations = [];
			values = [];
			value = '';
			screen.value = printScreen();
			lastCalculation = false;
			break;
		default:
			if (lastCalculation) {
				value = '';
				screen.value = '';
				values = [];
			}

			if (value !== '') {
				value += action;
				values.pop();
				values.push(value);
			} else {
				value += action;
				values.push(value);
			}

			lastCalculation = false;
			screen.value = printScreen();
			break;
	}
};

const calculate = () => {
	let total = 0;

	for (let i = 0; i < values.length; i++) {
		if (['x', '/'].includes(operations[i])) {
			switch (operations[i]) {
				case 'x':
					values[i] = '' + values[i] * values[i + 1];
					values.splice(i + 1, 1);
					operations.splice(i, 1);
					i = i - 1;
					break;
				case '/':
					values[i] = '' + values[i] / values[i + 1];
					values.splice(i + 1, 1);
					operations.splice(i, 1);
					i = i - 1;
					break;
			}
		}
	}

	for (let i = 0; i < values.length; i++) {
		if (i === 0) {
			total = Number.parseFloat(values[i]);
		} else {
			switch (operations[i - 1]) {
				case '+':
					total += Number.parseFloat(values[i]);
					break;
				case '-':
					total -= Number.parseFloat(values[i]);
					break;
			}
		}
	}

	return total;
};

const printScreen = () => {
	out = '';
	for (let i = 0; i < values.length; i++) {
		out += values[i];
		if (operations[i]) out += operations[i];
	}
	return out;
};
