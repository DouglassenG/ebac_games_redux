import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '..'

import { store } from '../../../store'

describe('Testes para o componente header', () => {
  test('Deve rederizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
