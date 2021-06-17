import React from 'react'
import '../../assets/styles/Footer.css';
import metodoPago from '../../assets/static/metodos_pago.jpg';
export const Footer = () => {
    return (
        <footer className="colorFooter">
            <div className="container">
                <div className="informacion">
                    <div className="nosotros">
                        <div className="boxInfo">
                            <p className="titleInfo"> SOBRE NOSOTROS</p>
                        </div>
                        <ol>
                            <li>
                                <a className="a-info" href="#Somos"><p className="space">¿Quienes somos?</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Historia"><p className="space">Nuestra historia</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Info"><p className="space">Nuestra Información</p></a>
                            </li>

                        </ol>
                    </div>

                    <div className="categorias">
                        <div className="boxInfo2">
                            <p className="titleInfo"> CATEGORÍAS </p>
                            <p className="titleInfo"> DESTACADAS</p>
                        </div>
                        <ol>
                            <li>
                                <a className="a-info" href="#ProfSalud"> <p className="space"> Profesionales de la salud</p> </a>
                            </li>
                            <li>
                                <a className="a-info" href="#ProtHig"> <p className="space">Protección e higiene</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Control"><p className="space">Control y prevención</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Movilidad"><p className="space">Movilidad</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Indepndencia"><p className="space">Independencia y cuidado <br /> en el hogar</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Terapia"><p className="space">Terapia respiratoria</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Confort"><p className="space">Confort</p></a>
                            </li>

                        </ol>
                    </div>

                    <div className="servicioCliente">
                        <div className="boxInfo">
                            <p className="titleInfo"> SERVICIO AL CLIENTE</p>
                        </div>
                        <ol>
                            <li>
                                <a className="a-info" href="#Politicas"> <p className="space">Política de entregas</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Devoluciones"><p className="space">Política de devoluciones</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Garantia"><p className="space">Política de garantías</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Cancelacion"><p className="space">Política de cancelación</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#Whatsapp"> <p className="space">Whatsapp 123 123 3434</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#PBX"><p className="space">PBX 01 8000 123 345</p></a>
                            </li>
                            <li>
                                <a className="a-info" href="#E-mail"><p className="space">e-Mail: info@impormedical.com</p></a>
                            </li>

                        </ol>
                    </div>


                    <div className="nosotros">
                        <div className="boxInfo3">
                            <p className="titleInfo"> SUSCRÍBASE A NUESTRO NEWSLETTERS</p>
                        </div>
                        <input className="inputFooter" type="search" />
                        <div className="condiciones">
                            <label className="a-info">
                                <input type="checkbox" name="" id="" />
                                Aceptación de términos y condiciones <br /> de manejo de datos
                            </label>
                        </div>

                        <div className="metodoPago">
                            <p className="a-info">Nuestro métodos de pago</p>
                        </div>

                        <div className="imgPago">
                            <img className="imgMetPago" src={metodoPago} alt="" />
                        </div>

                    </div>

                </div>

                <div className="creadores">

                </div>
            </div>
        </footer>
    )
}
