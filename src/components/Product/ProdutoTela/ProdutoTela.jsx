import Search from "../../Header/Search"
import { NavLink } from "react-router-dom"
import logo from './../../../assets/logo.png';

export default function ProdutoTela() {
  return (
    <div>
        <div className="w-screen flex justify-center items-center h-24 bg-[#FFF449] shadow-lg">
            <div className='max-w-[1200px] flex items-center justify-center h-24 md:pr-2 lg:pr-44 m-auto '>
                <a href="./../../Layout" className='flex items-center justify-center'>
                    <img src={logo} alt="logo" className='w-[60px] h-[60px] pointer '/>
                    <p className=' text-center text-gray-600 font-bold text-2xl m-1.5 p-2'>TAKAS</p> 
                </a>
            </div>
            <Search />
                <ul className='flex md:pr-20 lg:pr-40 '>
                    <li>
                        <NavLink to="/cadastro" className=' text-gray-600 font-bold p-2 m-2 rounded-md hover:bg-white hover:text-yellow-300 duration-300 transition ease-in-out ' >Cadastro</NavLink>   
                    </li> 
                    <li>
                        <NavLink to="/login" className=' text-gray-600 font-bold  p-2 m-2 rounded-md hover:bg-white hover:text-yellow-300 duration-300 transition ease-in-out' >Login</NavLink>
                    </li>
                </ul>
        </div>
        <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">     
            <div className="w-96 h-96 bg-white flex items-center justify-center">
                aa
            </div>
        </div>
    </div>
    
  )
}
