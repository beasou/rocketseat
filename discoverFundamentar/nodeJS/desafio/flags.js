function getFlags(flag){
    const index = process.argv.indexOf(flag) + 1 //procurando o numero da flag dentro, pegando a posição mais 1 q é o index da frente
    return process.argv[index]//pegando o resultado
}

module.exports = getFlags;