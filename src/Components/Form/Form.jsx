import { useState } from "react"
import "./Form.css"

function Form() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(null)
    const [profissao, setProfissao] = useState("") 
    const [erro, setErro] = useState("")
    const [lista, setLista] = useState([])

function verificarForm(e){
    e.preventDefault()
    if(!nome || !idade || !profissao){
        setErro("Preencha todos os campos")
    }   
    
    setLista([...lista, {nome, idade, profissao}])
}

  return (

   <div className="form-container">

  <form onSubmit={verificarForm}>

    <div>
      <label>Nome</label>
      <input 
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onFocus={() => setErro("")}
        onChange={(e) => setNome(e.target.value)}/>
    </div>

    <div>
      <label>Idade</label>
      <input 
        type="number" 
        placeholder="Digite sua idade"
        value={idade}
        onFocus={() => setErro("")}
        onChange={(e)=> setIdade(e.target.value)}/>
    </div>

    <div>
      <label>Profissão</label>
      <input 
      type="text" 
      placeholder="Digite sua profissão"
      value={profissao}
      onFocus={() => setErro("")}  
      onChange={(e)=> setProfissao(e.target.value)}/>
    </div>

    <button type="submit">Enviar</button>
    { lista.map((lista, index)=>{
        return (
            <div id="infos">
            <ul key={index}>
                <li>Seu nome é {lista.nome}</li>
                <li>Você tem {lista.idade} anos</li>
                <li>Sua profissão é {lista.profissao}</li>
            </ul>
            </div>
        )
    }) }
  </form>
    {erro && <div id="erro">
        <p>{erro}</p>
    </div> }
  
</div>


  )
}

export default Form