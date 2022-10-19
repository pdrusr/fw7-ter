import express from "express"
import { postagem } from "./database/Modelos.js"

const Rotas = express.Router()

Rotas.get("/", async function(requisicao, resposta) {
    resposta.render("inicio.pug")
})

Rotas.get("/postagem/:codigo", async function(requisicao, resposta) {
    resposta.render("postagem.pug")
})

Rotas.get("/postar", async function(requisicao, resposta) {
    resposta.render("postar.pug")
})

Rotas.post("/postar", async function(requisicao, resposta) {

    const corpo = requisicao.body

    console.log(corpo)

    const novapostagem = new postagem({
        descricao: corpo.descricao,
        conteudo: corpo.conteudo,
        nomeusuario: corpo.nomeusuario,
        data_post: corpo.data_post,
        ativo: corpo.ativo == "on" ? true : false 
    })

    const resultado = await novapostagem.save()

    console.log(resultado)

    resposta.redirect("/")
})

Rotas.get("*", function(requisicao, resposta) {
    resposta.render("404.pug")
})

export default Rotas