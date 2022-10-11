import express from "express"
import Rotas from "./Rotas.js"                                // IMPORTA AS ROTAS

const servidor = express()                                      // CRIA A INSTANCIA DO SERVIDOR

servidor.set("view engine", "pug")                              // UTILIZA O PUG COMO RENDERIZADOR DE PÁGINA
servidor.set("views", "./views")                                // UTILIZA O ENDEREÇO 'VIEWS' COMO DIRETORIO DE PÁGINAS

servidor.use(express.json())                                    // PERMITE USAR JSON
servidor.use(express.urlencoded({ extended: true }))            // PERMITE CONVERTER OS FORMULÁRIOS PARA JSON
servidor.use(express.static("public"))                          // PERMITE O ACESSO DA PASTA 'PUBLIC'

servidor.use(Rotas)                                            // FAZ O USO DAS ROTAS

servidor.listen(3000, function() {                              // LIGAR O SERVIDOR
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})