import mongoose from "mongoose"
import notifier from "node-notifier"
import "dotenv/config"

const endereco = process.env.MONGO_URI
const configuracao = { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 5000 }

mongoose.connect(endereco, configuracao)

    .then(function() {
        notifier.notify({
            title: "Projeto Web 7",
            message: "BANCO DE DADOS CONECTADO!",
            icon: "./src/public/favicon.png"
        })
    })

    .catch(function(erro) {
        console.log(erro)
    })
