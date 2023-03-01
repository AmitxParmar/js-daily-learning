// indexOf(): Takes a substring and if the substring exists in a string,it return the first position of the substring if does not exists it returns -1.

let string = '30 Days of JavaScript';
string.indexOf(substring)
console.log(string.indexOf('D')); // 3
console.log(string.indexOf('Days')); // 3
console.log(string.indexOf('days')); // -1
console.log(string.indexOf('a')); // 4
console.log(string.indexOf('JavaScript')); // 11
console.log(string.indexOf('Script')); // 15
console.log(string.indexOf('script')); // -1