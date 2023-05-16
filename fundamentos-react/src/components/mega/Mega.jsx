import { useState } from "react"
import './Mega.css'

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

    const [qtd, setQtd] = useState(props.quantidade || 6);
    const numerosIniciais = Array(qtd).fill(0)
    const [numerosMega, setNumerosMega] = useState(numerosIniciais)

    var tagsNumeros = numerosMega.map((numero, i) => {
        return(
            <span className="numero" key={i}> {numero} </span>
        )
    })

    return(
        <div className="Mega">
            <div className="tituloNumeros">Números:</div>
            <div id="numeros">
                {tagsNumeros}
            </div>       

            <div className='inputGroup'>
                <span>Quantos?</span>
                <input type="number" value={qtd} onChange={(e) => {
                    setQtd(+e.target.value)
                    setNumerosMega(getNumeros(+e.target.value))
                }}/>
                <button onClick={_=>{
                    setQtd(10)
                    setNumerosMega(getNumeros(10))
                }}>10</button>
            </div>

        </div>
    )
}