import logoLivro from '../../assets/header/logoLivro.png'
import lupaHeader from '../../assets/header/lupaHeader.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Header(){
    return(
        <BrowserRouter>
            <header>
            <section>
                <img src={logoLivro} alt="Imagem de uma ilustração de um livro aberto de capa azul" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav>
                <ul>
                    <li><Link>Início</Link></li>
                    <li><Link>Livros Doados</Link></li>
                    <li><Link>Quero Doar</Link></li>
                </ul>
            </nav>
            <section>
                <input type="search" name="" id="" placeholder='O que você procura?'/>
                <button>
                    <img src={lupaHeader} alt="Imagem de uma lupa branca" />
                </button>
            </section>
        </header>
        <Routes>
            <Route/>
            <Route/>
            <Route/>
        </Routes>
        </BrowserRouter>
    )
}