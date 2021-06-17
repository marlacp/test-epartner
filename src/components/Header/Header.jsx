import React from 'react'
import '../../assets/styles/Header.css';
import Impormedical from '../../assets/static/LogoImpormedical.jpg';
import Carrito from '../../assets/static/carrito.jpg';
import silla from '../../assets/static/silla_rueda_logo.jpg';
import corazon from '../../assets/static/corazon_logo.jpg';
import profsalud from '../../assets/static/profesional_logo.jpg';
import lavadoManos from '../../assets/static/lavado_logo.jpg';
export const Header = () => {
    return (
        <header>

        <div className="container">

            <div className="cont-search">
                <div className="logoImpor">
                    <img src={Impormedical} alt="Impormedical" />
                </div>

                <form action="" className="search-form">
                    <input className="searchInput" type="search" placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRIBELO AQUÍ..." />
                    <div className="box">
                        <div className="search icon"></div>
                    </div>
                </form>

                <div className="group-car">
                    <div className="MisPedidos"> <a className="pedidos" href="#Pedidos">MIS PEDIDOS</a></div>
                    <div className="Saludo1"> <p className="aliado">HOLA ALIAD@</p> </div>
                    <div className="Saludo2"> <a className="ingresa" href="#Ingresa">INGRESA</a> </div>
                    <div className="ImgCar"> <img src={Carrito} className="addcarImg" alt="carrito" /> </div>
                    <div className="Car"> <a className="carrito" href="#Ingresa">CARRITO</a></div>

                </div>

            </div>
            <div className="cont-hamb">

                <div className="menu icon hamb"></div>
                <div className="sillaImg"> <img src={silla} alt="sillaRuedas" /> </div>
                <div className="movilidadLink"> <a className="mov" href="#Movilidad">MOVILIDAD</a></div>
                <div className="corazonImg"> <img className="heart" src={corazon} alt="corazon" /></div>
                <div className="careLink"> <a className="careHome" href="#Hogar">CUIDADO EN EL HOGAR</a></div>
                <div className="profsaludImg"><img src={profsalud} className="profImgsalud" alt="profesionalSalud" /></div>
                <div className="linkProf"> <a className="profsalud" href="#ProfesionalesSalud">PROFESIONALES EN LA SALUD</a></div>
                <div className="lavadoImg"><img src={lavadoManos} alt="lavado" /></div>
                <div className="linktapabocas"><a className="tapabocasd" href="#Tapabocas">TAPABOCAS Y DESINFECCIÓN</a></div>

            </div>


        </div>
        </header>
    )
}


