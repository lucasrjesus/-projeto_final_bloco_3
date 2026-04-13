import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import ListarCategorias from './components/listarCategorias/ListarCategorias'
import FormCategoria from './components/formcategoria/FormCategoria'

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col bg-gray-200'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App