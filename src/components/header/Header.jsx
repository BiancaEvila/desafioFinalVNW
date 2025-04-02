import { Link } from 'react-router-dom'
import logoLivro from '../../assets/header/logoLivro.png'
import lupaHeader from '../../assets/header/lupaHeader.png'
import s from './header.module.scss'


export default function Header(){
    return(
        <header>
            <section className={s.logoHeader}>
                <img src={logoLivro} alt="Imagem de uma ilustração de um livro aberto de capa azul" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to='/'>Início</Link></li>
                    <li><Link className={s.link} to='/livrosdoados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/querodoar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraDeBusca}>
                <input type="search" name="" id="" placeholder='O que você procura?'/>
                <button>
                    <img src={lupaHeader} alt="Imagem de uma lupa branca" />
                </button>
            </section>
        </header>
    )
}