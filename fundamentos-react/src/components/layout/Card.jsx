import './Card.css'

export default (props) => {
    
    const color = props.color || '#3e82ff'

    const style = {
        backgroundColor: color,
    }

    return (
        <div className='Card' style={style}>
            <div className='Title'> {props.titulo} </div>
            <div className='Content'> {props.children} </div>
        </div>
    )
}