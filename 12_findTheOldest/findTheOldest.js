const findTheOldest1 = function (people) {
    let peopleAge = people.map((person) => {
        let theirAge = person.yearOfDeath - person.yearOfBirth;
        return { name: person, age: theirAge }
    })
    let peopleSort = peopleAge.slice().sort((a, b) => b.age - a.age);
    return peopleSort[0]["name"];

};

const findTheOldest = function (people) {
    let oldestPerson = people.reduce((oldest, person) => {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (oldest.age && oldest.age > age) { return oldest }
        else return { name: person.name, age: age };
    }, {})
    return oldestPerson.name;
}

// Do not edit below this line
module.exports = findTheOldest;
