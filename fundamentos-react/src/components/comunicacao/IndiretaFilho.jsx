export default props => {
    const enviarDados = props.funcao

    const nomes = ['Eduardo', 'Carlos', 'Jesus', 'Dos', 'Reis']

    let random = parseInt(Math.random() * nomes.length)
    
    const nome = nomes[random]
    const idade = parseInt( Math.random()*30 ) + 20

    return(
        <div>
            
            <button onClick={
                _ => {
                    enviarDados(nome, idade)
                }
            }>Quem é teu pai?</button>
        </div>
    )
}