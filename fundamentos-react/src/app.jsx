import './App.css'
import React from "react";
import Card from './components/layout/Card'

import Mega from './components/mega/Mega';
import ContadorComponentes from './components/contador/ContadorComponentes';
import ContadorAtomico from './components/contador/ContadorAtomico';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos'
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'


export default _ => 
    <div className='App'>

        <h1>Fundamentos React (reduzido)</h1>


        <div className="Cards">

            <Card titulo="#13 - [DESAFIO] Mega Sena" color='red'>
                <Mega></Mega>
            </Card>

            <Card titulo="#12.2 - Contador (componentes)" color='#005fa0'>
                <ContadorComponentes numeroInicial={10}></ContadorComponentes>
            </Card>

            <Card titulo="#12.1 - Contador (atômico)" color='#004b7e'>
                <ContadorAtomico numeroInicial={10}></ContadorAtomico>
            </Card>

            <Card titulo="#11 - Componente Controlado">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color='blue'>
                <IndiretaPai></IndiretaPai>
            </Card>
            

            <Card titulo='#09 - Comunicação Direta'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#08 - Renderização Condicional'>
                <ParOuImpar numero={20} />
                <ParOuImpar numero={11} />
                <UsuarioInfo usuario={{nome:'Arthur'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email:'arthur@email.com'}}></UsuarioInfo>
            </Card>

            <Card titulo='#07 - [DESAFIO] Repetição' color='red'>
                <ListaProdutos></ListaProdutos>
            </Card>

            <Card titulo='#06 - Repetição'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='#05 - Componente com filhos'>
                <Familia sobrenome='Rogado' >
                    <FamiliaMembro nome='Arthur' />
                    <FamiliaMembro nome='Duda' />
                    <FamiliaMembro nome='Nilva' />
                </Familia>
            </Card>

            <Card titulo="#0x - Card Exemplo" color="#000">
                Apenas um exemplo de como fica um card aqui
            </Card>


            <Card titulo="#04 - Números aleatórios" color="#080">
                <Aleatorio min={5} max = {20} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Exemplo de parâmetro" >
                <ComParametro 
                aluno="Arthur" 
                nota= {9.8} />
            </Card>


            <Card  titulo="#01 - Primeiro elemento">
                <Primeiro></Primeiro>
            </Card>

        </div>

        
    

    </div>
    