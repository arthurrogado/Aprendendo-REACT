
export default (props) => {
    const { min, max } = props

    const num = parseInt( Math.random(min, max) * (max - min)) + min
    return (
        <>
            <h2>Valor Aleatório entre {min} e {max}</h2>
            Aleatório: {num}
        </>
    )
}