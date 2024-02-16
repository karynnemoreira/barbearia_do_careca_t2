import React, { useState } from "react" //chamando o hook useState
import Imgcareca1 from "./careca.jpg" //importado imagem da pasta main
import Imgcareca2 from "../../assets/careca2.jpg" //importando imagem da pasta assets
import Carrinho from "./carrinho.png"

function Main() {

   //1º criar uma const
   //2º criar uma array [] que vai guardar duas coisas, dois parâmetros. [estado, setEstado ]
   //3º receber =  o hook useState()
   //4º dentro do () colocar o valor inicial (0) ("Karynne") ("batata") (2020)

   const [numero, setNumero] = useState(0) //para o card 1
   const [numero2, setNumero2 ] = useState(0) //para o card 2


   // const [a coisa, habilidade de mudar essa coisa ] = useState(valor inicial)

   //Utilizando função
   //  function Adicionar(){
   //    setNumero(numero + 1)
   // }

   //Arrow function - caso queiram estudar um pouco sobre o assunto

   //-----SEM CONDIÇÃO utilizando arrow function
   //  const Adicionar = () => {
   //    setNumero(numero + 1)
   // }

   //---COM CONDIÇÃO   utilizando arrow function
   const Adicionar = () => {
      if (numero < 10) {
         setNumero(numero + 1)
      }
   }

   const Remover = () => {
      if(numero > 0){
      setNumero(numero - 1)
      }
   }


//FUNÇÕES PARA O CARD 2 -utilizando função normal

function Adicionar2(){
   if(numero2 < 15){
         setNumero2(numero2 + 1)
   }
}

//Removendo 1 valor

function Remover2(){
   if(numero2 > 0){
         setNumero2(numero2 - 1)
   }
}

//Função para limpar

function Limpar(){
   setNumero(0)
}


function Limpar2(){
   setNumero2(0)
}


   return (
      <main>
         <div className="card">
            <img className="cortes" src={Imgcareca1} alt="" />
            <h3>R$ 50,00</h3>
            <button onClick={Adicionar}> Adicionar  <img src={Carrinho} alt=""/></button>
            <button onClick={Remover}> Remover </button>
            <button onClick={Limpar}>Limpar</button>
            <h2> {numero} </h2>
         </div>

         <div className="card">
            <img className="cortes" src={Imgcareca2} alt="" />
            <h3>R$ 50,00</h3>
            {/* <img onClick={Adicionar2} src={Carrinho} alt=""/> */}
            <button onClick={Adicionar2}> Adicionar  <img src={Carrinho} alt=""/></button>
            <button onClick={Remover2}> Remover </button>
            <button onClick={Limpar2}>Limpar</button>
            <h2> {numero2} </h2>
         </div>
      </main>
   )
}

export default Main