import './Input.css'
import { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function alterar (e) {
        setValor(e.target.value)
    }
    
    return(
        <div className="Input">
            <h2>{valor}</h2>
            <input value={valor} onChange={alterar}/>
            <input value={valor} onChange={(e)=>{ setValor(e.target.value) }}/>
            <input value={valor} readOnly/>
            <input value={undefined}/>
        </div>
    )
}