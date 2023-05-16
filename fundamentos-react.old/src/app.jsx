import React from "react";

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'


export default _ => 
    <div id="app">

        <h1>Fundamentos React (reduzido)</h1>

        <Card titulo="Card Exemplo" >
            Apenas um exemplo de como fica um card aqui
        </Card>


        <Card titulo="Números aleatórios">
            <Aleatorio min={5} max = {20} />
        </Card>

        <Card titulo="Fragmento">
             <Fragmento />
        </Card>

        <Card titulo="Exemplo de parâmetro" >
            <ComParametro 
            aluno="Arthur" 
            nota= {9.8} />
        </Card>


        <Card  titulo="Primeiro elemento">
             <Primeiro></Primeiro>
        </Card>
    

    </div>
    