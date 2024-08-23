const findTheOldest = function (people) {
    let oldestPerson = people.reduce((oldest, person) => { 
        if (!('yearOfDeath' in oldest))
            oldest['yearOfDeath'] = (new Date()).getFullYear();
        
        if (!('yearOfDeath' in person))
            person['yearOfDeath'] = (new Date()).getFullYear();

        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;

        if (oldestAge < personAge)
            oldest = structuredClone(person);

        return oldest;
        
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
