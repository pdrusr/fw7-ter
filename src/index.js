import notifier from "node-notifier"
import express from "express"
import morgan from "morgan"
import Rotas from "./Rotas.js"

import "./database/Conexao.js"

const servidor = express()

servidor.set("view engine", "pug")
servidor.set("views", "./src/views")

servidor.use(morgan("dev"))
servidor.use(express.json())
servidor.use(express.urlencoded({ extended: true }))   
servidor.use(express.static("./src/public"))           

servidor.use(Rotas)                          

servidor.listen(3000, function() {                            
    notifier.notify({
        title: "Projeto Web 7",
        message: "SERVIDOR EM FUNCIONAMENTO!",
        icon: "./src/public/favicon.png"
    })
})