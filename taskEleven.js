'use strict';

function all(firstPromise, secondPromise) {
    let counter = 0;
    let values = [];
    return new Promise((fulfill, reject) => {
        firstPromise.then((value) => {
            counter++;
            values.push(value);
            if (counter == 2)
                fulfill(values);
        });
        secondPromise.then((value) => {
            counter++;
            values.push(value);
            if (counter == 2)
                fulfill(values);
        });
    });
}
all(getPromise1(), getPromise2()).then(console.log);