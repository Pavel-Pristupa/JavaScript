const minAge = 18;
const maxAge = 60;

// Task 1*:
function checkAge_1(age){
    if (age < minAge){
        console.log(`You don't have access cause your age is ${age}. It's less than ${minAge}`)
    } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
    } else if (age > maxAge) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

checkAge_1(17)
checkAge_1(18)
checkAge_1(61)


// // Task 2*:
function checkAge_2(age){
    if(typeof age === 'number'){
        if (age < minAge){
            console.log(`You don't have access cause your age is ${age}. It's less than ${minAge}`)
        } else if (age >= minAge && age < maxAge) {
            console.log("Welcome!");
        } else if (age > maxAge) {
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");
        }
    } else {
        console.log(`Error. You've entered "${age}", that's not a number.`)
    }
}

checkAge_2(17)
checkAge_2(18)
checkAge_2(61)
checkAge_2("asd")


// // Task 3**:
function checkAge_3(age){
    if(typeof age === 'number' || !isNaN(+age)){
        if (age < minAge){
            console.log(`You don't have access cause your age is ${age}. It's less than ${minAge}`)
        } else if (age >= minAge && age < maxAge) {
            console.log("Welcome!");
        } else if (age > maxAge) {
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work");
        }
    } else {
        console.log(`Error. You've entered "${age}", that's not a number.`)
    }
}

checkAge_3(17)
checkAge_3(18)
checkAge_3(61)
checkAge_3("asd")
checkAge_3('2')


// // Task 4***:
function checkAge_4(){
    var age = prompt('What\'s your age?');
    var minAge = 18;
    var maxAge = 60;
    if(typeof age === 'number' || !isNaN(+age)){
        if (age < minAge){
            alert(`You don't have access cause your age is ${age}. It's less than ${minAge}`)
        } else if (age >= minAge && age < maxAge) {
            alert("Welcome!");
        } else if (age > maxAge) {
            alert("Keep calm and look Culture channel");
        } else {
            alert("Technical work");
        }
    } else {
        alert(`Error. You've entered "${age}", that's not a number.`)
    }
}
checkAge_4()

