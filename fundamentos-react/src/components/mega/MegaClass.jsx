import { Component } from "react";
import './Mega.css'
import Numeros from "./Numeros";
import FormQuantidade from "./FormQuantidade";

class Mega extends Component {


    gerarOsNumeros() {
    }
    

    render(){
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
            <div className="Mega">
                <div className="tituloNumeros">Números:</div>
                <div id="numeros">
                    {tagsNumeros}
                </div>       

                <div className='inputGroup'>
                    <span>Quantos?</span>
                    <input type="number" onChange={(e) => {
                        setNumerosMega(getNumeros(props.quantidade))
                    }}/>
                    <button onClick={_=>{
                        setNumerosMega(getNumeros(10))
                    }}>10</button>
                </div>

            </div>
        )
    }

    
}

export default Mega