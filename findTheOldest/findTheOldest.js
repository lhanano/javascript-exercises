let findTheOldest = function(array) {
 /* doesn't work if yearOfDeath is missing
    let oldest = array.sort((a,b) => {
        let aAge;
        let bAge;
        if (!a.yearOfDeath) aAge = (new Date().getFullYear()) - a.yearOfBirth;
        aAge = (a.yearOfDeath - a.yearOfBirth);
        if (!b.yearOfDeath) bAge = (new Date().getFullYear()) - b.yearOfBirth; 
        bAge = (b.yearOfDeath - b.yearOfBirth);

        if (aAge < bAge) {
            return 1;
        }
        else if (aAge > bAge) {
            return -1;
        }
        else 
        {return 0;}
    });
    return oldest[0];
*/
    
    return array.reduce((a, b) => {
        const getAge = function(death, birth) {
            if (!death) {death = new Date().getFullYear()}; 
            return death - birth;
        };
        const aAge = getAge(a.yearOfDeath, a.yearOfBirth);
        const bAge = getAge(b.yearOfDeath, b.yearOfBirth);

        return aAge < bAge ? b : a;
    })
  
}

module.exports = findTheOldest
