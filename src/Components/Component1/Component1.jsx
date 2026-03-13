import "./Component1.css"

function Component1({nome, idade, profissao, cor}) {
  return (
    <div className='component1-div' style={{background: cor}}>
        <ul>
            <li>Olá {nome}</li>
            <li>Você tem {idade} anos</li>
            <li>Sua profissão é <strong>{profissao}</strong></li>
        </ul>
    </div>
  )
}

export default Component1