
function Navbar() {
    return (
        <div className='w-full flex py-4 bg-indigo-900 text-white'>
            <div className="w-full flex justify-between items-center px-8 text-lg">

                <div className="flex items-center gap-2 text-2xl font-bold">
                    <div className="bg-red-500 p-1 rounded">
                        FARMÁCIA GENERATION
                    </div>
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        className="border rounded px-20 bg-white text-black"
                    />
                    <button className="flex">
             
                    </button>
                </div>

                <div className='flex gap-4'>
                    Categorias
                    Cadastrar Categoria
                </div>

            </div>
        </div>
    )
}

export default Navbar