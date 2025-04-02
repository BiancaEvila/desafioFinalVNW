import iconeLivro from "../../assets/queroDoar/iconeLivro.png"
import s from "./queroDoar.module.scss"
import { useState } from "react"
import axios from "axios"

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [imagem_url, setImagem_Url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImagem_Url(e.target.value)
    }

    const limparCampos = () => {
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_Url("")
    }

    const enviarDados = async(e) => {
        e.preventDefault()
        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post("https://api-livros-yw6v.onrender.com/doar", dadosPEnviar)
        limparCampos()
    }

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={enviarDados}>
                <div>
                    <img src={iconeLivro} alt="Imagem com ícone de livro com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder="Titulo" value={titulo} onChange={capturaTitulo} required/>
                <input type="text" placeholder="Categoria" value={categoria} onChange={capturaCategoria} required/>
                <input type="text" placeholder="Autor" value={autor} onChange={capturaAutor} required/>
                <input type="text" placeholder="Link da Imagem" value={imagem_url} onChange={capturaImagem} required/>
                <input type="submit" value="Doar" className={s.buttonDoar} />
            </form>
        </section>
    )
}