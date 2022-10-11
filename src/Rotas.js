import express from "express"
import { usuario } from "./database/Modelos.js"

const Rotas = express.Router()

Rotas.get("/", function(requisicao, resposta) {

    const novousuario = new usuario({
        nomeusuario: "pdrusr",
        nomecompleto: "Pedro Augusto dos Santos",
        email: "pdrusr@gmail.com",
        senha: "123456",
        data_nasc: new Date("2000-11-08"),
        ativo: true
    })

    novousuario.save()

    resposta.render("inicio.pug")

})

Rotas.get("*", function(requisicao, resposta) {
    resposta.render("404.pug")
})

export default Rotas