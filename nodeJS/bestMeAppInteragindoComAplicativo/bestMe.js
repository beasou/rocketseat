// process.stdout.write("Alguma coisa") //escrever algo de saida

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que posso fazer para melhorar",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    return process.stdout.write(questions[index] + "\n")
}

ask()

process.stdin.on("data", data =>{//ficar ouvindo enquanto tiver dados
    process.stdout.write(data.toString().trim() + '\n')
    process.exit()
})