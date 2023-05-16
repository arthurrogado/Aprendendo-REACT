import { Component } from "react";
import './Contador.css'

class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        pulo: this.props.pulo || 1
    }

    setPulo = (e) => {
        this.setState({
            pulo: +e.target.value
        })
    }

    inc = () => {
        this.setState({
            numero: this.state.numero += this.state.pulo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero -= this.state.pulo
        })
    }

    render () {
        return (
            <div className="Contador">
                <div id="numero">{this.state.numero}</div>
                <label htmlFor="">Pulo:</label>
                <input type="number" onChange={this.setPulo} value={this.state.pulo}/>
                <div>
                    <button onClick={this.dec}>-</button>
                    <button onClick={this.inc}>+</button>
                </div>
            </div>
        )
    }

}

export default Contador