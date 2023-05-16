import React from "react"
import './Button.css'

export default props => {
    return(
        <button 
            type="button"
            onClick={ _=>props.click(props.label) }
            className={`
            button
            ${props.operator ? 'operator': ''}
            ${props.double ? 'double': ''}
            ${props.triple ? 'triple': ''}
        `}>
            {props.label}
        </button>
    )
}