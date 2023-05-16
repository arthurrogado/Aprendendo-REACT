import { useState } from "react"

export default props => {

    const min = 1
    const max = 60
    
    function getNumeroUnico (min, max, array) {
        let rand = parseInt( Math.random() * (max + 1 - min)) + min
        return array.includes(rand) ? 
            getNumeroUnico(min, max, array) :
            rand
    }
    
    function getNumeros (qtd) {
        const numeros = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = getNumeroUnico(min, max, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    
    var qtd = props.quantidade || 6
    const numerosIniciais = Array(qtd)
    const [numerosMega, setNumerosMega] = useState(numerosIniciais)

    
    

    var tagsNumeros = numerosMega.map((numero) => {
        return(
            <span className="numero" key={numero}> {numero} </span>
        )
    })

    return(
        <div>
            <div className="tituloNumeros">Números:</div>
            <div id="numeros">
                {tagsNumeros}
            </div>
        </div>
    )
}