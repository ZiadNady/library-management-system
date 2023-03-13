exports.toCapitalCase = (str) =>
    str.split("/")[1].charAt(0).toUpperCase() +
    str.split("/")[1].substring(1, str.length - 1);

exports.generatePassword = length => {
    let password = '';
    for (let char = 0; char < length; char++) {
        password += String.fromCharCode(Math.round(Math.random()*93 + 33));
    }
    return password;
}