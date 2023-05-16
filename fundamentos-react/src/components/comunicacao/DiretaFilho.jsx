export default props => {
    return(
        <>
            <div>Filho: </div>
            <span>Nome: <strong>{props.nome}</strong> </span> 
            <span>| Idade: <strong>{props.idade}</strong></span>
        </>
    )
}