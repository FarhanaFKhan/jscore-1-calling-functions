
//1. Write a function that returns the year someone is born given their age as input
//2. Using the answer from step 1, write a function that takes someone's name and 
//age as input and returns a string that states the person's name and year they were born in a sentence

//function 1

function yearBorn(age){
    const d= new Date();
    const currentYear= d.getFullYear();
    const yearOfBirth= currentYear-age;
    return yearOfBirth;

}

function intro(name,age){
    return `Hey! My name is ${name} and I was born in ${yearBorn(age)}`;
}
console.log(intro("farhana", 29));