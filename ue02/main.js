// callbacks - sync

function firstFunction(param, xyz) {
    // do stuff
    xyz(param);
}

function cb1(param) {
    console.log(param);
}

firstFunction(1, cb1);
firstFunction(2, (p) => console.log("anonym: " + p));
firstFunction(3, () => console.log("no param :("));
firstFunction(4, (a, b, c) => console.log(a + " - " + b + " - " + c));


function secondCb(arr, out, test) {
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i])) {
            out(arr[i]);
        }
    }
}

secondCb([1, 2, 3], (x) => console.log(x), (y) => {
    if (y % 2 !== 0) {
        return true;
    } else {
        return false;
    }
});

function out1(param) {
    console.log(param);
}

function test1(param) {
    if (param % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

secondCb([1, 2, 3, 4, 5, 6, 7], out1, test1);

// callback - async
console.log("before");
setTimeout(() => console.log("done!"), 1000);
console.log("after");

// promises - own
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("juhu"), 2000);
});

myPromise.then((x) => console.log("myPromise done - " + x));

const failingPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("ohh :("), 3000);
});

failingPromise
    .then((x) => console.log("failingPromise done - " + x))
    .catch((y) => console.log("failingPromise failed - " + y));


// async-await
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("juhu"), 4000);
});

const mp2 = await myPromise2;
console.log("mp2 done - " + mp2);

const failingPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("ohh :("), 1000);
});

try {
    const fp2 = await failingPromise2;
    console.log("fp2 done - " + fp2);
} catch (err) {
    console.log("fp2 failed - " + err);
}

async function af() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    return json[0].phone;
}

console.log(await af());