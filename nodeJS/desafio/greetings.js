const getFlags = require('./flags')
const getFlagValue = require('./flags')//importando 

console.log(`Oi ${getFlags('--name')}. ${getFlags('--greeting')}`)