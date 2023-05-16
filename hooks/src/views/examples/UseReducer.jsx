import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0,
    user: null,
    cart: [],
    products: [],
    favs: []
}

function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}

        case 'numberMult7':
            return {...state, number: state.number * 7}

        case 'numberDiv25':
            return {...state, number: state.number / 25}

        case 'numberToInt':
            return {...state, number: parseInt(state.number)}

        case 'addAnyNumber':
            return {...state, number: action.payload.number}

        case 'login':
            return { ...state, user: { name: action.payload.name} }
        default:
            return state

    }
}

const UseReducer = (props) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [tempName, setTempName] = useState('');
    const [newNumber, setNewNumber] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">

                <span className="text">{
                    state.user ?
                    state.user.name :
                    'Não logado'
                }</span>

                <span className="text">{state.number}</span>

                <button className='btn'
                    onClick={() => dispatch({type:'numberAdd2'})}>+2</button>

                <button className='btn'
                    onClick={() => dispatch({type:'numberMult7'})}>x7</button>

                <button className='btn'
                    onClick={() => dispatch({type:'numberDiv25'})}>/25</button>

                <input type='number' value={newNumber}
                    onChange={(e)=>{setNewNumber( parseInt(e.target.value)) }} />
                <button class='btn'
                    onClick={() => dispatch({type:'addAnyNumber', payload:{number:newNumber}})}>Add This Number</button>
                
                <button class='btn'
                    onClick={() => dispatch({type:'numberToInt'})}>To Int </button>

                <input type="text" value={tempName} 
                    onChange={(e) => {
                        setTempName(e.target.value)
                    }} />
                <button className='btn'
                    onClick={ () => dispatch({type:'login', payload:{name:tempName} }) }>Login</button>
            </div>
            
        </div>
    )
}

export default UseReducer
