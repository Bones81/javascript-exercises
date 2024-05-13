const findTheOldest = function(people) {
    const currentYear = (new Date).getFullYear()
    return people.reduce( (oldest, person) => {
        if(!person.yearOfDeath) person.yearOfDeath = currentYear
        if(person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = person
        }
        return oldest
    }, { name: 'Initial', yearOfBirth: currentYear, yearOfDeath: currentYear})
};

// Do not edit below this line
module.exports = findTheOldest;
