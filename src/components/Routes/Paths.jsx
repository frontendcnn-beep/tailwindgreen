import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Sobre from '../Pages/Sobre/Sobre'
import NovoCadastro from '../Pages/NovoCadastro/NovoCadastro'
import Nofound from '../Pages/Nofound/Nofound'
import Layout from '../Layout/Layout'
import DetalhesRoom from '../DetalhesRoom/DetalhesRoom'

const Paths = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/novoCadastro' element={<NovoCadastro />} />
                    <Route path='/*' element={<Nofound />} />
                    <Route path='/DetalhesRoom/:id' element={<DetalhesRoom />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Paths
