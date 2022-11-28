let empty = {};

console.log(empty);

const person = {
    name: "Zhou Yanhong",
    yearOfBirth: 934,
    pet: "pigeon"
}

console.log(person);
console.log(person.yearOfBirth);

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(key, element)
    }
}