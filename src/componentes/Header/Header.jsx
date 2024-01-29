import React from "react";
import Logo from "./barbearia.png"
import Coragem from "../../assets/coragem.jpg"
import "../../App.css"


function Header() {
    return (
        <>
            <nav>

                <img src={Logo} alt="Logo da barbearia do careca" />

                
                 <img src={Coragem} alt="" />  

                {/* <img src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg" alt="Logo da barbearia do careca" /> */}
                <ul>
                    <li>Cortes</li>
                    <li>Valores</li>
                    <li>Unidades</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </>
    )
}

export default Header