let bcrypt = require('bcryptjs');

let hashConvert = async plainText => {
    let saltRandom = await bcrypt.genSalt(10);
    let hashString = await bcrypt.hash(plainText, saltRandom);
    return hashString;
}

let compareConvert = async (plainText, hashString) => {
    let isMatching = await bcrypt.compare(plainText, hashString);
    return isMatching;
}

let pwd = '123';
let pwdHashing = '$2a$10$/tWqQNNNeGFm.B6Yj1R5SuQbWsswftt6RHPYtLvDXQi9phKIuS7R2';
// hashConvert(pwd)
//     .then(result => console.log({ result }))
compareConvert(pwd, pwdHashing)
    .then(result => console.log({ result }))
