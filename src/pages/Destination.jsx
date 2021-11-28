import React from 'react'
import Main from '../components/Main/Main'
import './destination.scss'

function Destination({children}) {
    return (
        <Main>
        <div className='main'>
            {children}
            destination
        </div>
        </Main>
        
    )
}

export default Destination
