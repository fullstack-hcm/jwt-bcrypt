let jwt = require('jsonwebtoken');
let priKey = `hellomern_2410`;

let signPromise = plainObj => {
    return new Promise(resolve => {
        jwt.sign(plainObj, priKey, (err, token) => {
            if (err) return resolve({ error: true, message: err.message });

            resolve({ error: false, data: token });
        })
    });
}

let verifyPromise = token => {
    return new Promise(resolve => {
        jwt.verify(token, priKey, (err, obj) => {
            if (err) return resolve({ error: true, message: err.message });
            resolve({ error: false, data: obj });
        })
    })
}
 // let objDemo = {
//     username: '123',
//     email: '123@gmail.com'
// };
// signPromise(objDemo)
//     .then(result => console.log(result))
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsImVtYWlsIjoiMTIzQGdtYWlsLmNvbSIsImlhdCI6MTU3MzU2NDY5N30.bTA1TolQK0ekbwzd0fuEpeDoGvHLLQbzoDeHMJkVE6k';
verifyPromise(token)
    .then(result => console.log(result))
    