import "./Form.css"

function Form() {
  return (

   <div className="form-container">

  <form>

    <div>
      <label>Nome</label>
      <input type="text" placeholder="Digite seu nome"/>
    </div>

    <div>
      <label>Idade</label>
      <input type="number" placeholder="Digite sua idade"/>
    </div>

    <div>
      <label>Profissão</label>
      <input type="text" placeholder="Digite sua profissão"/>
    </div>

    <button type="submit">Enviar</button>

  </form>

</div>

  )
}

export default Form