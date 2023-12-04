import Layout from "../src/components/Layout"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from '../src/components/Login/Cadastro/Cadastro';
import Login from '../src/components/Login/Cadastro/Login';
import VenderLink from "./components/Hero/Vender/Vender";
import ProdutoTela from "./components/Product/ProdutoTela/ProdutoTela";
import LoginAutenticar from "./components/Hero/Autenticar/Autenticar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/produtotela' element={<ProdutoTela />} />
        <Route path='/vender' element={<VenderLink />} />
        <Route path='/autenticar' element={<LoginAutenticar />} />
        <Route path='/layout' element={<Layout />} />
        

        
        <Route index element={<Navigate to="/layout" />} />
      </Routes>
    </Router>
  )
}
