function validateString(str) {
	let strInput = String(str);
	let numberFlag = false;
	let charFlag = false;
	let upperCharFlag = false;
	let atCharFlag = false;
	let notEmptyFlag = false;

	if (strInput !== '') {
		notEmptyFlag = true;
	} else {
		console.log("You've entered an empty string.");
	}
	if (/[a-zA-Z]/.test(strInput)) {
		charFlag = true;
	} else {
		console.log(`Your string "${strInput}" contains no letters.`);
	}
	if (/[0-9]/.test(strInput)) {
		numberFlag = true;
	} else {
		console.log(`Your string "${strInput}" contains no numbers.`);
	}
	if (/[A-Z]/.test(strInput)) {
		upperCharFlag = true;
	} else {
		console.log(`Your string "${strInput}" contains no uppercase letters.`);
	}
	if (strInput.includes('@')) {
		atCharFlag = true;
	} else {
		console.log(`Your string "${strInput}" contains no '@'.`);
	}
	if (strInput.length < 5) {
		console.log(
			`Your string "${strInput}" is too SHORT, it's ${strInput.length} characters long but should be at least 5.`
		);
	}
	if (strInput.length > 64) {
		console.log(
			`Your string "${strInput}" is too LONG, it's ${strInput.length} characters long but should be not more than 64.`
		);
	}
	if (
		numberFlag &&
		charFlag &&
		upperCharFlag &&
		atCharFlag &&
		notEmptyFlag &&
		5 <= strInput.length &&
		strInput.length <= 64
	) {
		console.log(`Your string "${strInput}" is good to go! Well done!`);
	}
}

// Test data
const string_1 = '';
const string_2 = 'aa';
const string_3 = 'myString';
const string_4 = 'myStr1ng';
const string_5 =
	'Lorem 1psum dolor sit @met, consectetuer adipiscing elit, sed dia';
const string_6 = 'my@';
const string_7 = '@myStr1ng';
const string_8 = 1111;
const string_9 = 'mY@1';

validateString(string_8);
