import logo from './../../assets/logo.png';
import Search from './Search';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
  
    <nav>
      <div className="w-screen flex justify-center items-center h-24 bg-[#FFF449] shadow-lg">
        
        <div className='max-w-[1200px] flex items-center justify-center h-24 md:pr-2 lg:pr-44 m-auto '>
          <img src={logo} alt="logo" className='md:w-[40px] lg:w-[60px] md:h-[40px] lg:h-[60px] shadow-inherit '/>
          <p className=' text-center text-gray-600 font-bold md:text-lg lg:text-2xl m-1.5 p-2'>TAKAS</p>
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

    </nav>
 
  );
}
