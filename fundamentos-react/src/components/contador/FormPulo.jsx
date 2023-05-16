
export default props => {
    return (
        <div>
            <label>Pulo:</label>
            <input type="number" onChange={(e) => {
                props.setPulo(+e.target.value)
            }} value={props.pulo}/>
        </div>
    )
}