let arr = [{ name: "dipali", class: "msc-i", age: 23 }, { name: "shivani", class: "mscii", age: 12 }, { name: "apeksha", class: "mscii", age: 33 }]
let ageAbove = (person) => 
    person.age >= 18;
     let  a=  (person) => {
        person.aged = arr.includes(person.name);
        return person;
       }

let agereducer = ((sum, person) => {
    return sum + person.age;
}, 0);

let ageabove18 = arr.filter(ageAbove).map(a);
let totalabove18 = ageabove18.reduce(agereducer);
let totalage = arr.reduce(agereducer);
console.log(totalage);

