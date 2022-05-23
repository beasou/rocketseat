const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    module:'development', //modulo pra deixar a execução do webpack mais rapida
    //entry: 'src/index.js' //devido a particularidade do OS, vamos utilizar require('path')
    entry: path.resolve(__dirname,'src', 'index.jsx'), //__dirname, vai pegar o diretorio q coloquei a instrução
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx'] //pode ler tanto uma extenção quanto a outra
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html') //qual arquivo de templete q ele vai utilizar para gerar o html, que é o index.html
        })
    ],
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