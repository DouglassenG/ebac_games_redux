import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar com o carrinho vazio', () => {
    renderizaComProvider(<Header />)
    expect(
      screen.getByText('0 itens, valor total: R$ 0,00')
    ).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    const preloadedState = {
      carrinho: {
        itens: [
          {
            id: 1,
            categoria: 'RPG',
            imagem: '',
            plataformas: ['windows'],
            preco: 150.9,
            precoAntigo: 199.9,
            titulo: 'Elden Ring'
          },
          {
            id: 2,
            categoria: 'RPG',
            imagem: '',
            plataformas: ['windows', 'PS5'],
            preco: 199.9,
            precoAntigo: 299.9,
            titulo: 'Hogwarts Legacy'
          }
        ]
      }
    }

    renderizaComProvider(<Header />, { preloadedState })

    expect(
      screen.getByText('2 itens, valor total: R$ 350,80')
    ).toBeInTheDocument()
  })
})
