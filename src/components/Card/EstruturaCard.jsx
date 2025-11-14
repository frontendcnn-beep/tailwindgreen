import React from 'react'

const EstruturaCard = ({ img, alt, titulo, descricao }) => {
    return (

        <div className='shadow-md pb-4 rounded-xl'>
            <img className="rounded-t h-40 w-full object-cover"
                src={img} alt={alt} />
            <h2 className='font-semibold text-sm pt-2 px-3'>
                {titulo}
            </h2>
            <p className='truncate text-sm px-3'>
                {descricao}
            </p>
        </div>
    )
}
export default EstruturaCard
