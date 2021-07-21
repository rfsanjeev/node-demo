let done = true

const isItDoneYet = new Promise(function (resolve, reject) {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

const checkIfItsDone = function() {
    isItDoneYet
        .then(function (ok) {
            console.log(ok)
        })
        .catch(function (err) {
            console.error(err)
        })
}

checkIfItsDone()

//NEXT PROGRAM
//pass your birth year and system will return your age after 2 seconds and then
// will calculate your category and return the result after 2 seconds

const calculateAge = (year) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (year < 0) {
                return reject('Year must be non-negative')
            }
            resolve(2021 - year)
        }, 2000)
    })
}

const checkCategory = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 0) {
                return reject('Year must be non-negative')
            }

            let value;
            if (age > 18 && age < 45) {
                value = 'Category 18-44';
            } else if (age > 46) {
                value = 'Category 46+';
            } else {
                value = 'Invalid Category';
            }
            resolve(value)
        }, 2000)
    })
}

calculateAge(1990).then(age => {
    console.log(age)
    return checkCategory(age)
}).then(category => {
    console.log(category)
}).catch((e) => {
    console.log(e)
});