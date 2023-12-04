import logo from './../../assets/logo.png';


export default function Footer() {
  return (
    <div className="bg-white  h-64 col justify-center items-center">
        <div className='flex justify-center items-center mt-4'>
            <div className='mx-10'>
            <h1 className='text-xl font-bold text-center p-2'>Formas de pagamento</h1>
            <p className='text-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className='text-blue-400 flex text-sm justify-center items-center p-2 m-2'>link para descrição</a>
            </div>
        <div className=' mx-10'>
            <h1 className='text-xl font-bold text-center p-2'>Formas de pagamento</h1>
            <p className='text-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className='text-blue-400 flex text-sm justify-center items-center p-2 m-2'>link para descrição</a>
        </div>
        <div className=' mx-10'>
            <h1 className='text-xl font-bold text-center p-2'>Formas de pagamento</h1>
            <p className='text-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className='text-blue-400 flex text-sm justify-center items-center p-2 m-2'>link para descrição</a>
        </div>
        <div className=' mx-10'>
            <h1 className='text-xl font-bold text-center p-2'>Formas de pagamento</h1>
            <p className='text-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className='text-blue-400 flex text-sm justify-center items-center p-2 m-2'>link para descrição</a>
        </div>
        </div>
        
          <div className="w-screen p-0 col h-0.5 mt-3 bg-gradient-to-r from-yellow-500 to-orange-500">
          </div>

          <div className="w-screen flex justify-center items-center h-24 mt-4">
              <div className='max-w-[1200px] flex items-center justify-center h-24 p-20 mr-[800px]'>
                      <a href="./../../Layout" className='flex items-center justify-center'>
                          <img src={logo} alt="logo" className='w-[60px] h-[60px] pointer '/>
                          <p className=' text-center text-gray-600 font-bold text-2xl m-1.5 p-2'>TAKAS</p> 
                      </a>
              </div>

              <a href="#" className='m-[200px] mr-28 text-gray-600 text-sm font-bold hover:text-blue-500'>politica de privacidade</a>
          </div>
         

    </div>
  )
}
