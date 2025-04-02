import { Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header"
import "./globalStyle/globalStyle.scss"
import Footer from "./components/footer/Footer"
import Inicio from "./pages/inicio/Inicio"
import LivrosDoados from './pages/livrosDoados/LivrosDoados'
import QueroDoar from './pages/queroDoar/QueroDoar'


export default function App(){
  return(
    <section>
        <Header/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/livrosdoados' element={<LivrosDoados/>}/>
            <Route path='/querodoar' element={<QueroDoar/>}/>
        </Routes>
        <Footer/>
    </section>
  )
}