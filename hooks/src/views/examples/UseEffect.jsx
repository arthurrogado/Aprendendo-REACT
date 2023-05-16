import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    if(num === "") return - 1
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    useEffect(function() {
        setFatorial(calcFatorial(number) > 0 ? calcFatorial(number) : "Não existe!")
    }, [number])
    
    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = 'Reem, grande!'
        } else {
            document.title = "De boas"
        }
    }, [fatorial])
    
    // Desafio
    const [status, setStatus] = useState('Ímpar')

    useEffect(()=>{
        if(number % 2 === 0) {
            setStatus('Par')
        } else {
            setStatus('Ímpar')
        }
    }, [number])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={(e)=>{setNumber(e.target.value)}} />
            </div>

            <SectionTitle title='Desafio' />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
