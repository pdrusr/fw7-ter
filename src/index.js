import express from "express"
import "./database/Conexao.js"
import Rotas from "./Rotas.js"

const servidor = express()

servidor.set("view engine", "pug")
servidor.set("views", "./src/views")

servidor.use(express.json())
servidor.use(express.urlencoded({ extended: true }))   
servidor.use(express.static("./src/public"))           

servidor.use(Rotas)                          

servidor.listen(3000, function() {                            
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})