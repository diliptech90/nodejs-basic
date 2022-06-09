
const p1 = Promise.resolve(50);
const p2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'geek'));
// setTimeout(() => { console.log('i m promise')}, 100));
const prm = [p1, p2];

Promise.allSettled(prm).
    then((results) => results.forEach((result) =>
        console.log(result.status, result.value)));

//   Promise.all(prm).
//   then((results) => results.forEach((result) =>
//   console.log(result.status,result.value)));

// Second Example



const timeOutTest = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(` completed in ${time}`)
        }, time)
    })
}


timeOutTest(100).then(result => console.log(result));

Promise.allSettled([timeOutTest(100), timeOutTest(5000)]).then( (result) => {
    console.log(result)
})




