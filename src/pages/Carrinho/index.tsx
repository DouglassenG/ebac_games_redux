import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { paraReal } from '../../components/Produto'
import { Game } from '../../App'

const Carrinho = () => {
  const { itens } = useSelector((state: RootState) => state.carrinho)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {itens.map((item: Game) => (
          <li key={item.id}>
            <img src={item.imagem} alt={item.titulo} />
            <div>
              <h3>{item.titulo}</h3>
              <p>{paraReal(item.preco)}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Valor total: {paraReal(valorTotal)}</p>
    </div>
  )
}

export default Carrinho