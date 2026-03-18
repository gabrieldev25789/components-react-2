import "./infos.css"

function Infos({ nome, idade, profissao}) {
  return (
    <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>
    </div>
  )
}

export default Infos