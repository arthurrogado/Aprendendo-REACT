import IndiretaFilho from "./IndiretaFilho"
import { useState } from "react"

export default props => {

    const [nome, setNome] = useState('---')
    const [idade, setIdade] = useState('---')

    function pegarDados(nomeP, idadeP) {
        setNome(nomeP)
        setIdade(idadeP)
    }

    return(
        <>
            <div id="pai">Meu pai é: {nome} e tem {idade} anos!</div>
            <IndiretaFilho funcao={pegarDados}></IndiretaFilho>
        </>
    )
}