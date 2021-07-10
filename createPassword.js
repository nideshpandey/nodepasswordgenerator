const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*'

const createPassword = (length = 8, hasNumber= true, hasSymbol= true) =>{
    let passwd = alphabets
    hasNumber ? (passwd += numbers) : ''
    hasSymbol ? (passwd += symbols) : ''
    return generatedPassword(length, passwd)
}

const generatedPassword = (length, passwd) => {
    let password = ''
    for(let i =0; i<length; i++){
        password += passwd.charAt(Math.floor(Math.random()* passwd.length))
    }
    return password

}

module.exports = createPassword 