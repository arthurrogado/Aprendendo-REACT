import './Mega.css'

export default props => {
    return(
        <div style={{
            border: '1px solid red',
            boxSizing:''
        }}>
            <div className='inputGroup'>
                <span>Quantos?</span><input type="text" />
                <button>Gerar Números</button>
            </div>
        </div>
    )
}