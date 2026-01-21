import Header from './components/Header'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store'
import Home from './pages/Home'
import Categorias from './pages/Categorias'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categorias />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
