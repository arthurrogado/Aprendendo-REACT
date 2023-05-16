import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operator: null,
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component {

    state = {...initialState}

    // Indica o 'this' correto no construtor da classe pai (eu acho, pelo super)
    constructor(props) {
        super(props)
        this.setOperation = this.setOperation.bind(this)
    }

    clearMemory() {
        console.log('Limpando')
        this.setState( { ...initialState })
    }

    setOperation(operator) {
        console.log(operator)
        // Mudar o current para 1 (alterar segundo valor)
        // Alterar o state operation
        // Se clicar em igual realizar a operação salva entre os 2 values
            // se tiver apenas 1 valor, não fazer nada...

        if (this.state.current === 0) {
            this.setState({current:1, clearDisplay: true, operator})
        } else {
            const equals = operator === '='
            const currentOperator = this.state.operator

            const values = [... this.state.values]
            /* try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }  catch(e) {
                values[0] = this.state.values[0]
            } */

            switch (currentOperator) {
                case '+':
                    values[0] = values[0] + values[1]
                    break;
                    
                case '-':
                    values[0] = values[0] - values[1]
                    break;
                    
                case '*':
                    values[0] = values[0] * values[1]
                    break;
                    
                case '/':
                    values[0] = values[0] / values[1]
                    break;
            
                default:
                    break;
            }

            this.setState({
                displayValue: values[0],
                operator: equals ? null : operator,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        console.log(n)
        if (n === '.' && this.state.displayValue.includes('.') ) {
            // Inibe de ter 2 pontos
            return
        }
        const toClearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = toClearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})

        if(n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [... this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }



    render() {
        // Resolve a confusão de 'this' no JavaScript
        // Arrow Function meio que força o this correto
        const addDigit = n => this.addDigit(n)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={ () => this.clearMemory()} triple /> {/*Arrow function direto também resolve o 'this' */}
                <Button label="/" click={this.setOperation} operator />
                <Button label="7" click={addDigit} />
                <Button label="8" click={addDigit} />
                <Button label="9" click={addDigit} />
                <Button label="*" click={this.setOperation} operator />
                <Button label="4" click={addDigit} />
                <Button label="5" click={addDigit} />
                <Button label="6" click={addDigit} />
                <Button label="+" click={this.setOperation} operator />
                <Button label="1" click={addDigit} />
                <Button label="2" click={addDigit} />
                <Button label="3" click={addDigit} />
                <Button label="-" click={this.setOperation} operator />
                <Button label="0" click={addDigit} double />
                <Button label="." click={addDigit} />
                <Button label="=" click={this.setOperation} operator />
            </div>
        )
    }
}