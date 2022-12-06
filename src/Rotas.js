import express from "express"
import { Types, isValidObjectId } from "mongoose"
import { postagem } from "./database/Modelos.js"


const Rotas = express.Router()


Rotas.get("/inicio", async function(requisicao, resposta) {

    await postagem.find({})

        .then(function(resultados) {
            // console.log(resultados)
            resposta.render("inicio.pug", { "resultados": resultados })
        })

        .catch(function(erro) {
            // console.log(erro.message)
            resposta.status(500).send(erro.message)
        })
})


Rotas.get("/postagem/:codigo", async function(requisicao, resposta) {

    const { codigo } = requisicao.params

    if (isValidObjectId(codigo)) {

        await postagem.findById( Types.ObjectId(codigo) )

            .then(function(resultado) {
                // console.log(resultado)
                resposta.render("postagem.pug", { "resultado": resultado })
            })

            .catch(function(erro) {
                //console.log(erro.message)
                resposta.status(500).send(erro.message)
            })

    }
    
    else resposta.render("codigo.pug")

})


Rotas.get("/postar", async function(requisicao, resposta) {

    resposta.render("postar.pug")

})


Rotas.post("/postar", async function(requisicao, resposta) {

    const corpo = requisicao.body

    // console.log(corpo)

    const novapostagem = new postagem({
        descricao: corpo.descricao,
        conteudo: corpo.conteudo,
        nomeusuario: corpo.nomeusuario,
        data_post: corpo.data_post,
        ativo: corpo.ativo == "on" ? true : false 
    })

    const resultado = await novapostagem.save()

    // console.log(resultado)

    resposta.redirect("/")

})


Rotas.get("/", function(requisicao, resposta) {

    resposta.render("entrar.pug")

})  


Rotas.post("/entrar", function(requisicao, resposta) {

    const { email, senha } = requisicao.body

    resposta.redirect("/inicio")

})

Rotas.post("/registrar", function(requisicao, resposta) {

    const { nome, email, senha } = requisicao.body

    resposta.redirect("/inicio")

})


Rotas.get("*", function(requisicao, resposta) {

    resposta.render("404.pug")

})


export default Rotas