import React, { useState } from "react"

function Footer() {

    //SETTIMEOUT: É UM MÉTODO QUE EXECUTARÁ UM BLOCO DE CÓDIGO APÓS UM TEMPO ESPECIFICADO (DELAY), O TEMPO É CORRESPONDIDO POR MILISSEGUNDOS, EXEMPLO: 3 SEGUNDOS EQUIVALE A 3000, 6 SEGGUNDOS EQUIVALE A 6000. 

    // Sintaxe setTimeout
    // setTimeout(() => {
    // o que eu quero que faça
    // }, tempo)


    //Exemplo 1 exibindo uma mensagem com o setTimeout

    const Mensagem = () => {
        setTimeout(() => {
            alert("Você recebeu 1 milhão")
        }, 5000)
    }

    //Exemplo 2 criando um contador usando o setTimeout

    const [numero, setNumero] = useState(0)

    const Add = () => {
        setTimeout(() => {
            setNumero(numero + 1)
        }, 3000)
    }

    const Remover = () => {
        setTimeout(() => {
            setNumero(numero - 1)
        }, 2000)
    }


    //SETINTERVAL É UM MÉTODO QUE PERMITE EXECUTAR REPETIDADEMENTE UM BLOCO DE CÓDIGOS, A CADA INTERVALO DE TEMPO. EXEMPLO: DE 3 EM 3 SEGUNDOS FAÇA TAL COISA. 

    //SINTAXE SETINTERVAL
    // setInterval(()=>{
    //     o que quero fazer
    // }, tempo)

    //     estado  setEstado
    const [number, setNumber] = useState(0)


    function Start() {
        setInterval(() => {
            setNumber((number) => number + 1) //retorne o seu valor + 1 
        }, 1000)//retorne 1 valor de 1 em 1 segundo
    }


    //-------------Criando a função start utilizando uma arrow function--------------
    // const Start =()=>{
    //     setInterval(()=>{
    //         setNumber((number) => number + 1) //retorne o seu valor + 1 
    //     },1000)//retorne 1 valor de 1 em 1 segundo
    // }
    //---------------------------------------------------------------------------------

    return (
        <footer>

            <button onClick={Mensagem}> Mensagem</button>

            <div className="boxContador">
                <h2>Contador feito com o setTimeout</h2>
                <h2> {numero} </h2>
                <button onClick={Add}> Add + 1</button>
                <button onClick={Remover}> Remover - 1</button>
            </div>

            <div className="boxCronometo">
                <h2>Cronômetro</h2>
                <h3> {number} </h3>
                <button onClick={Start}>Start</button>
                <button>Stop</button>
                <button>Clear</button>
            </div>
        </footer>
    )
}

export default Footer