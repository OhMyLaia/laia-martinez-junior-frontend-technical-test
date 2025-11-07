import React from 'react'

function CardList({children}) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 m-5 mb-10'>
            {children}
        </div>
    )
}

export default CardList