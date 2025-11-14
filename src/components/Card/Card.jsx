import React from 'react'
import EstruturaCard from './EstruturaCard'
import Dados from '../DadosRooms/db.json';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>
            {
                Dados.rooms.map((room) => (

                    <Link to={`/DetalhesRoom/${room.id}`} key={room.id}>
                        <EstruturaCard
                            img={room.imgSrc}
                            alt={room.legenda}
                            titulo={room.title}
                            descricao={room.description}
                        />
                    </Link>
                ))
            }
        </>
    )
}

export default Card
