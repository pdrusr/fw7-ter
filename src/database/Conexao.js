import mongoose from "mongoose"
import "dotenv/config"

const endereco = "mongodb+srv://admin:ha3Zb24D0vpE962Q@web.cfvnvjt.mongodb.net/?retryWrites=true&w=majority"

const configuracao = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    connectTimeoutMS: 5000
}

mongoose.connect(endereco, configuracao, function() {
    console.log("CONECTADO COM O BANCO DE DADOS!")
})