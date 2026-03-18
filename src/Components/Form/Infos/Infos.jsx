import "./infos.css"

function Infos({id, nome, idade, profissao}) {
  return (
    <div>
            <ul key={id}>
                <li>{nome}</li>
                <li>{idade}</li>
                <li>{profissao}</li>
            </ul>
    </div>
  )
}

export default Infos