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