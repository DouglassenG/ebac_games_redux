import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { RootState } from '../store' // Ajuste o caminho se necessário
import carrinhoReducer from '../store/reducers/carrinho'
import api from '../services/api'
import { BrowserRouter } from 'react-router-dom'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: ReturnType<typeof configureStore>
}

export function renderizaComProvider(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        carrinho: carrinhoReducer,
        [api.reducerPath]: api.reducer
      },
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
