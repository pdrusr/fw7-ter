import mongoose from "mongoose"

const EsquemaUsuario = new mongoose.Schema({
    nomeusuario: { type: String, lowercase: true, unique: true, maxLength: 16, required: true },
    nomecompleto: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, minLength: 6, maxLength: 16, required: true },
    data_nasc: { type: Date, required: true },
    ativo: { type: Boolean, select: true, required: true }
})

const EsquemaPostagem = new mongoose.Schema({
    descricao: { type: String, maxLength: 256, required: true },
    conteudo: { type: String, required: true },
    nomeusuario: { type: String, lowercase: true, maxLength: 16, required: true },
    data_post: { type: Date, required: true },
    ativo: { type: Boolean, select: true, required: true }
})

const usuario = mongoose.model("usuario", EsquemaUsuario)
const postagem = mongoose.model("postagem", EsquemaPostagem)

export { usuario, postagem }