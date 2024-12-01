// function sum(a,b) {
//     return a+b;
// }

// module.exports = sum;

// function myFunction(number) {
//     if(typeof number !== 'number') {
//         throw new Error('Invalid input');
//     }
// }

// function fetchData(callBack) {
//     setTimeout(() => {
//         callBack('penaut butter');
//     }, 1000);
// }

function fetchPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        },1000);
    });
}

module.exports = fetchPromise;