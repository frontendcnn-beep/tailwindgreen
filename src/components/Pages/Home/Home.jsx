import React from 'react'
import Dados from '../../DadosRooms/db.json';
import Card from '../../Card/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-6'>

            <h1 className='col-span-full text-xl font-bold py-5'>
                Hoteis e suítes em Fortaleza/CE
            </h1>


            <Card />

        </div>
    )
}

export default Home
