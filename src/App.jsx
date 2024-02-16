import React from "react" //opcional
import "./App.css" //importando o arquivo de estilização App.css
import Header from "./componentes/Header/Header.jsx" //importando o arquivo header.jsx
import Main from "./componentes/Main/Main.jsx"
import Footer from "./componentes/Footer/Footer.jsx"

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  )

}


export default App