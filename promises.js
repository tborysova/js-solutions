let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});
//wraps everything inside function in promise
async function f() {

    return 1;
}

async function f() {
    let promise = Promise.resolve(1);
    let result = await promise;
}
f().then(alert);//1


async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }
    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404


let promise = Promise.resolve();
promise.then(() => alert("promise done!"));

alert("code finished");