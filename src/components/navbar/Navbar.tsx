import { Link } from "react-router-dom"
import { FirstAidIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"

function Navbar() {

    return (
        <>
            <div className='w-full flex justify-center py-4
                        bg-indigo-900 text-white'>

                <div className="container flex justify-between items-center px-8 text-lg">
                    
                    {/* Logo e Nome */}
                    <Link to="/home" className="flex items-center gap-2 text-2xl font-bold uppercase">
                        <div className="bg-red-500 p-1 rounded">
                            <FirstAidIcon color="white" size={32} />
                        </div>
                        FARMÁCIA GENERATION
                    </Link>

                    {/* Barra de Busca (Opcional, conforme sua imagem) */}
                    <div className="flex gap-2 items-center bg-white rounded px-2">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="p-1 text-black outline-none w-40 md:w-64"
                        />
                        <button className="flex items-center">
                            <MagnifyingGlassIcon size={24} weight="bold" color="#3b82f6" />
                        </button>
                    </div>

                    {/* Links de Navegação */}
                    <div className='flex gap-6 items-center'>
                        <Link to='/categorias' className='hover:text-yellow-400 transition-all'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:text-yellow-400 transition-all'>Cadastrar Categoria</Link>
                        
                        <div className="flex gap-4">
                            <UserIcon size={32} className="cursor-pointer hover:text-gray-300" />
                            <ShoppingCartIcon size={32} className="cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar