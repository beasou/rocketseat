const path = require('path')

module.exports ={
    //entry: 'src/index.js' //devido a particularidade do OS, vamos utilizar require('path')
    entry: path.resolve(__dirname,'src', 'index.jsx'), //__dirname, vai pegar o diretorio q coloquei a instrução
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx'] //pode ler tanto uma extenção quanto a outra
    },
    module:{
        rules: [
            {
                test: /\.jsx$/, //recebe uma expressao regular para conf se é um arquivo js ou não
                exclude:/node_modules/,
                use: 'babel-loader', //converter usando babel
            }
        ],
    }
};