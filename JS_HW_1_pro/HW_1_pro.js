const MIN_AGE = 18;
const MAX_AGE = 60;

// Task 1*:
function checkAge_1(age) {
	if (age < MIN_AGE) {
		console.log(
			`You don't have access cause your age is ${age}. It's less than ${MIN_AGE}`
		);
	} else if (age >= MIN_AGE && age < MAX_AGE) {
		console.log('Welcome!');
	} else if (age > MAX_AGE) {
		console.log('Keep calm and look Culture channel');
	} else {
		console.log('Technical work');
	}
}

checkAge_1(17);
checkAge_1(18);
checkAge_1(61);

// // Task 2*:
function checkAge_2(age) {
	if (typeof age === 'number') {
		if (age < MIN_AGE) {
			console.log(
				`You don't have access cause your age is ${age}. It's less than ${MIN_AGE}`
			);
		} else if (age >= MIN_AGE && age < MAX_AGE) {
			console.log('Welcome!');
		} else if (age > MAX_AGE) {
			console.log('Keep calm and look Culture channel');
		} else {
			console.log('Technical work');
		}
	} else {
		console.log(`Error. You've entered "${age}", that's not a number.`);
	}
}

checkAge_2(17);
checkAge_2(18);
checkAge_2(61);
checkAge_2('asd');

// // Task 3**:
function checkAge_3(age) {
	if (!isNaN(+age)) {
		if (age < MIN_AGE) {
			console.log(
				`You don't have access cause your age is ${age}. It's less than ${MIN_AGE}`
			);
		} else if (age >= MIN_AGE && age < MAX_AGE) {
			console.log('Welcome!');
		} else if (age > MAX_AGE) {
			console.log('Keep calm and look Culture channel');
		} else {
			console.log('Technical work');
		}
	} else {
		console.log(`Error. You've entered "${age}", that's not a number.`);
	}
}

checkAge_3(17);
checkAge_3(18);
checkAge_3(61);
checkAge_3('asd');
checkAge_3('2');

// Task 4***:
// Запустите файл 'index.html'
