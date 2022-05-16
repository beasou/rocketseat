// process.stdout.write("Alguma coisa") //escrever algo de saida

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que você poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    return process.stdout.write("\n" + questions[index] + " =>")
}

ask()

const answers = []
process.stdin.on("data", data =>{//ficar ouvindo enquanto tiver dados
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit', () =>{
    console.log(`
        Bacana !

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu foi: ${answers[1]} e sua locução para melhorar foi,
        ${answers[2]}

        O que te deixou feliz hoje:
        ${answers[3]}

        Você ajudou ${answers[4]} pessoas hoje!!

        Volte amanhã para novas reflexões
    `)
})