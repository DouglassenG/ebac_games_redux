import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc, item) => (acc += item.preco), 0)

  return (
    <S.Header>
      <div className="container">
        <Link to="/">
          <h1>EBAC Games</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <S.CartButton to="/carrinho">
                {itens.length} itens, valor total: {paraReal(valorTotal)}
                <img src={cesta} alt="Carrinho" />
              </S.CartButton>
            </li>
          </ul>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header
