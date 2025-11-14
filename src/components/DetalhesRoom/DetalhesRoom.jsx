import React from 'react';
import { useParams } from 'react-router-dom';
import Dados from '../DadosRooms/db.json'; // Certifique-se de que o caminho esteja correto

const DetalhesRoom = () => {
    const { id } = useParams();
    const room = Dados.rooms.find(room => room.id === id); // Encontra o quarto correspondente

    return (
        <div>
            <h3>Detalhe do quarto</h3>
            {room ? (
                <>
                    <h4>{room.title}</h4>
                    <img src={room.imgSrc} alt={room.title} />
                </>
            ) : (
                <p>Quarto não encontrado.</p>
            )}
        </div>
    );
}

export default DetalhesRoom;
