

export default props => {
    return(
        <div>
            <span>
                {props.numero} - 
                {props.numero % 2 === 0 ?  ' Par' : ' Ímpar'}
            </span>
        </div>
    )
}