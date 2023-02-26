let space = ' ' // an empty space string
let firstName = 'Amit'
let lastName = 'Parmar'
let country = 'India'
let job = 'Web dev'
let language = 'English'

// Concatenation using addition operator
let fullName = firstName + space + lastName // concatenation, merging itwo string together.
console.log(fullName)


let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)