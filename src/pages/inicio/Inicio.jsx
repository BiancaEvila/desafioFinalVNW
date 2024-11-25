import s from "./inicio.module.scss"
import imagem1 from "../../assets/main/imagem1doacao.png"
import imagem2 from "../../assets/main/imagem2doacao.png"
import imagem3 from "../../assets/main/imagem3doacao.png"
import imagem4 from "../../assets/main/imagem4doacao.png"

export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={s.porqueDoarSection}>
            <h2>Por que devo doar?</h2>
            <section className={s.cardsMotivos}>
                <section>
                    <img src={imagem1} alt="Imagem ilustrando um círculo social com 4 pessoas" />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </section>
                <section>
                    <img src={imagem2} alt="Imagem ilustrando uma pessoa lendo" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </section>
                <section>
                    <img src={imagem3} alt="Imagem ilustrando seis pessoas transformando o mundo" />
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </section>
                <section>
                    <img src={imagem4} alt="Imagem ilustrando balança que representa igualdade" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </section>
            </section>
        </section>
        </main>
    )
}