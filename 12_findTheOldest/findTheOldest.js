const findTheOldest = function(people) {
  const mappedPeople = people.map(person => {
    if ('yearOfDeath' in person) {
      person.livedYears = person.yearOfDeath - person.yearOfBirth;
    }

    if(!('yearOfDeath' in person)) {
      const thisYear = new Date().getFullYear();
      person.livedYears = thisYear - person.yearOfBirth;
    }

    return person;
  });

  const oldestPerson =  mappedPeople.sort((a, b) => b.livedYears - a.livedYears)[0];

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
