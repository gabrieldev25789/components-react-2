import "./infos.css"

function Infos({ nome, idade, profissao}) {
  return (
    <div>
            <ul>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
            <li id="btns">
                <button id="editar">Editar</button>
                <button id="excluir">Excluir</button>
            </li>

            </ul>
    </div>
  )
}

export default Infos