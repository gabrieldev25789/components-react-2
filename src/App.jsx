import Component1 from "./Components/Component1/Component1"
import "../src/Components/Component1/Component1.css"


import Form from "./Components/Form/Form"


function App() {

  const pessoas = [
    {nome: "Gabriel", idade: 23, profissao: "Programador", cor: "red"},
    {nome: "Julia", idade: 20, profissao: "Advogada", cor: "blue"},
    {nome: "Matheus", idade: 30, profissao: "Mecanico", cor: "green"},
    {nome: "Juliana", idade: 29, profissao: "Gerente", cor: "orange"},
    {nome: "João", idade: 33, profissao: "Padeiro", cor: "gray"}
  ]

  return (
    <>
    <div id="container">
      {pessoas.map((pessoa, index) => (
        <Component1 
          key={index}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
          cor={pessoa.cor}
        />
      ))}
    </div>
    <Form />
    </>
  )
}

export default App
