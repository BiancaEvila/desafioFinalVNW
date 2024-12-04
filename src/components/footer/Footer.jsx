import logoFacebook from "../../assets/footer/logoFacebook.png"
import logoTwitter from "../../assets/footer/logoTwitter.png"
import logoYoutube from "../../assets/footer/logoYoutube.png"
import logoLinkedin from "../../assets/footer/logoLinkedin.png"
import logoInstagram from "../../assets/footer/logoInstagram.png"
import s from "./footer.module.scss"


export default function Footer() {
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>0000-0000</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="Imagem da logo do facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Imagem da logo do twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Imagem da logo do youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Imagem da logo do linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt="Imagem da logo do instagram" /></a>
                </nav>
            </section>
            <section className={s.copyRight}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}