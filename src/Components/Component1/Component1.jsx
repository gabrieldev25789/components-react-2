import "./Component1.css"

function Component1({nome, idade, profissao, cor}) {
  return (
    <div className='component1-div' style={{background: cor}}>
    <p>Olá {nome}</p>
    <p>Você tem {idade} anos</p>
    <p>Sua profissão é {profissao}</p>
    </div>
  )
}

export default Component1