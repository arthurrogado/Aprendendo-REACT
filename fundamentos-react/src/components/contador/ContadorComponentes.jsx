import { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import FormPulo from "./FormPulo";
import './Contador.css'

class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        pulo: this.props.pulo || 1
    }

    setPulo = (novoPulo) => {
        this.setState({
            pulo: novoPulo
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
                <Display numero = {this.state.numero}></Display>
                <FormPulo setPulo={this.setPulo} pulo={this.state.pulo} ></FormPulo>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }

}

export default Contador