document.title = "#DAY4 - Conditionals"
/* let age = prompt("Enter your age:") */

/* # Exercise - 1 */
/* if (age >= 18) {
    alert("You are old enough to drive.");
} else {
    const remainingYears = 18 - age;
    alert(`You are left with ${remainingYears} years to drive.`)
} */

/* Exercise - lvl 2 - */
/* const grade = prompt("Enter grade:");
if (80 >= grade <= 100) {
    console.log('A');
}
else if (70 >= grade <= 79) {
    console.log('B');
}
else if (60 >= grade <= 69) {
    console.log('C');
}
else if (50 >= grade <= 59) {
    console.log('D');
}
else {
    console.log('F');
} */

/* Exercise - lvl 3 */
const month = "FebruarY";
switch (month.toLowerCase()) {
    case "january":
        console.log("January has 31 days.");
        break;
    case "february":
        console.log("February has 28 days.");
        break;
    default:
        console.log(" Enter a valid month.");
}


