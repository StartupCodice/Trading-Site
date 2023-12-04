import { NavLink } from "react-router-dom" 

export const Hero = () => {
  return (
    <div className="bg-yellow-100 w-screen h-28 shadow-inner shadow-xl flex justify-center items-center">
      <ul className='flex justify-between items-center '>
            <li>
              <NavLink to="/autenticar" className="text-black text-sm m-20  hover:text-purple-900">Vender/Anunciar</NavLink>   
            </li> 
            <li>
              <NavLink to="/vender" className="text-black text-sm m-20  hover:text-purple-900">Categorias</NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-black text-sm m-20  hover:text-purple-900">Carrinho</NavLink>
            </li>
        </ul>   
    </div>
  )
}
