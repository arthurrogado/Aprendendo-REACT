import produtos from '../../data/produtos.js'
import './ListaProdutos.css'

export default props => {

    const listaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i%2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td> 
                <td>R${produto.preco}</td>
            </tr>
        ) 
    })

    return(
        <div className='ListaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}