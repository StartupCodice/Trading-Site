import logo from './../../../assets/logo.png';

export default function Cadastro() {
  return (

    <div>

        <div className="w-screen flex justify-center items-center h-24 bg-[#FFF449]">
              <div className='max-w-[1200px] flex items-center justify-center h-24 p-20 mr-[800px]'>
                      <a href="./../../Layout" className='flex items-center justify-center'>
                          <img src={logo} alt="logo" className='w-[60px] h-[60px] pointer '/>
                          <p className=' text-center text-gray-600 font-bold text-2xl m-1.5 p-2'>TAKAS</p> 
                      </a>
              </div>

              <a href="#" className='m-[200px] mr-28 text-gray-600 font-bold'>Contato</a>
          </div>

      <div className="w-96 h-[580px] shadow-xl mx-auto text-gray-700 font-mono bg-white mt-20 py-10 px-8 rounded-md">
    <h1 className="text-center text-2xl">Registrar</h1>

    <form action="#!" className="mt-2 m-2">
        <div className="mb-4">
            <h3 className="mb-1 text-xl">
                Nome
            </h3>
            <input type="text" className="bg-gray-100 border border-black  p-2 rounded-md w-full focus:outline-none hover:opacity-90 transition ease-in-out" id="nome" placeholder="Insira seu nome aqui" />
        </div>
        <div className="mb-4">
            <h3 className="mb-1 text-xl">
                Email
            </h3>
            <input type="email" className="bg-gray-100 border border-black  p-2 rounded-md w-full focus:outline-none hover:opacity-90 transition ease-in-out" id="email" placeholder="Insira seu email aqui" />
        </div>
        <div className="mb-4">
            <h3 className="mb-1 text-xl">
                Senha
            </h3>
            <input type="password" className="bg-gray-100 border border-black  p-2 rounded-md w-full focus:outline-none hover:opacity-90 transition ease-in-out" id="senha" placeholder="Insira sua senha aqui" />
        </div>
        <div className="mb-4">
            <h3 className="mb-1 text-xl">
                Repita a senha
            </h3>
            <input type="password" className="bg-gray-100 border border-black  p-2 rounded-md w-full focus:outline-none hover:opacity-90 transition ease-in-out" id="confirmar-senha" placeholder="Insira sua senha aqui" />
        </div>
        <button type="submit" className="bg-gradient-to-r text-black from-yellow-500 to-orange-500 hover:opacity-70 transition duration-500 rounded-sm shadow-sm mt-4 w-full h-8 text-sm font-semibold">
            Registrar-se
        </button>

        <div className="w-full h-0.5 mt-3 bg-gradient-to-r from-yellow-500 to-orange-500">
          </div>

          <div className="mt-3 text-center">
              <p className="text-black text-sm ">Caso já tenha:</p>
              <a href="./Login" className="text-orange-700 text-base font-bold font-mono">FAÇA LOGIN</a>
          </div>
    </form>
</div>
    </div>
 
    
   

   
      
    
  )
}
