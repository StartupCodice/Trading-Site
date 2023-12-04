import logo from './../../../assets/logo.png';

export default function Login() {
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

    <div className="w-96 shadow-xl mx-auto text-gray-700 font-mono bg-white mt-20 py-10 px-8 rounded-md">
      <h1 className="text-center text-2xl">Login</h1>

      <form action="#!" className="mt-6 m-2">
          <div className="mb-4">
              <h3 className="mb-1 text-xl">
                  Email
              </h3>
              <input type="email" id="input-email" className="bg-gray-100 border border-black  p-2 rounded-md w-full focus:outline-none hover:opacity-90 transition ease-in-out" placeholder="Digite seu email.." />
          </div>
         
          <div className="mb-4">
              <h3 className="mb-1 text-xl">
                  Senha
              </h3>
              <input type="password" id='input-senha' className="bg-gray-100 border border-black p-2 rounded-md w-full focus:outline-none hover:opacity-90 transition ease-in-out"  placeholder="Digite sua senha.." />
          </div>
          <button className="bg-gradient-to-r text-black from-yellow-500 to-orange-500 hover:opacity-70 transition duration-500 rounded-sm shadow-sm mt-4 w-full h-8 text-sm font-semibold">
              Entrar
          </button>

          <div className="pt-3">
              <a href="#" className="text-blue-400 text-sm font-bold">Perdeu a senha?</a>  
          </div>
          
          <div className="w-full h-0.5 mt-3 bg-gradient-to-r from-yellow-500 to-orange-500">
          </div>

          <div className="mt-3">
              <p className="text-black text-sm">Novo aqui?<a href="./Cadastro" className="text-orange-700 text-base font-bold font-mono ml-4">   CRIAR CONTA</a></p>
          </div>


      </form>
  </div>
    </div>
      
  )
}