export default function ComParametro(props) {
    
    const situacao = props.nota >= 6 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2> { props.aluno } </h2>
            <h3> O aluno(a) está {situacao} com nota {props.nota}</h3>
        </div>
    )
}