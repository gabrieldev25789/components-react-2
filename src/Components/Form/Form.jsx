import "./Form.css"

import Infos from "./Infos/Infos"
import "../../Components/Form/Infos/Infos.css"

import { useState } from "react"

function Form() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [profissao, setProfissao] = useState("")
  const [erro, setErro] = useState("")
  const [lista, setLista] = useState([])

  function limpar(){
    setNome("")
    setIdade("")
    setProfissao("")
  }

  function verificarForm(e){
    e.preventDefault()

    if(!nome || !idade || !profissao){
      setErro("Preencha todos os campos")
      return
    }

    const novaPessoa = {
      nome,
      idade,
      profissao
    }

    setLista([...lista, novaPessoa])

    limpar()
    setErro("")
  }

  return (
<>
    <div className="form-container">

      <form onSubmit={verificarForm}>

        <h2>Formulario</h2>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onFocus={() => setErro("")}
            onChange={(e) => setNome(e.target.value)}
          /> 
        </div>

        <div>
          <label>Idade:</label>
          <input
            type="number"
            placeholder="Digite sua idade"
            value={idade}
            onFocus={() => setErro("")}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>

        <div>
          <label>Profissão:</label>
          <input
            type="text"
            placeholder="Digite sua profissão"
            value={profissao}
            onFocus={() => setErro("")}
            onChange={(e) => setProfissao(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>

      </form>

      {erro && (
        <div id="erro">
          <p>{erro}</p>
        </div>
      )}
    </div>

    {!erro && lista.map((pessoa, index) => (
      <div className="infos" key={index}>
        <Infos 
        nome={pessoa.nome}
        idade={pessoa.idade}
        profissao={pessoa.profissao}/>
      </div>
      ))}

</>

  )
}

export default Form