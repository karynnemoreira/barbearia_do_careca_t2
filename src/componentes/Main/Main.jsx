import React, { useState } from "react" //chamando o hook useState
import Imgcareca1 from "./careca.jpg" //importado imagem da pasta main
import Imgcareca2 from "../../assets/careca2.jpg" //importando imagem da pasta assets
import Carrinho from "./carrinho.png"

function Main() {

   //1º criar uma const
   //2º criar uma array [] que vai guardar duas coisas, dois parâmetros. [estado, setEstado ]
   //3º receber =  o hook useState()
   //4º dentro do () colocar o valor inicial (0) ("Karynne") ("batata") (2020)

   const [numero, setNumero] = useState(0)
   // const [a coisa, habilidade de mudar essa coisa ] = useState(valor inicial)

   //Utilizando função
   //  function Adicionar(){
   //    setNumero(numero + 1)
   // }

   //Arrow function - caso queiram estudar um pouco sobre o assunto

   //-----SEM CONDIÇÃO
   //  const Adicionar = () => {
   //    setNumero(numero + 1)
   // }

   //---COM CONDIÇÃO
   const Adicionar = () => {
      if (numero < 10) {
         setNumero(numero + 1)
      }
   }



   return (
      <main>
         <div className="card">
            <img className="cortes" src={Imgcareca1} alt="" />
            <h3>R$ 50,00</h3>
            <button onClick={Adicionar}>Agendar  <img src={Carrinho} alt=""/></button>

           

            <h2> {numero} </h2>
         </div>



         <div className="card">
            <img className="cortes" src={Imgcareca2} alt="" />
            <h3>R$ 50,00</h3>
            <img src={Carrinho} alt="" onClick={Adicionar}/>

            <h2> {numero} </h2>
         </div>
      </main>
   )
}

export default Main