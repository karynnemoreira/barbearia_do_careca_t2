import React from "react";
import "../../App.css"
import Logo from "./barbearia.png"
import Coragem from "../../assets/coragem.jpg" //Pegando imagem pela a pasta assets

function Header() {
    return (
        <header>
            <nav>
             <img src={Logo} alt="" />

                {/* <img src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-vintage-de-barbearia_441059-26.jpg" alt="Logo da barbearia do careca" /> */}
                <ul>
                    <li>Cortes</li>
                    <li>Valores</li>
                    <li>Unidades</li>
                    <li>Sobre</li>
                </ul>
               
            </nav>
        </header>
    )
}

export default Header