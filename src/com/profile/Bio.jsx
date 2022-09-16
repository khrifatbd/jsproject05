import React from 'react'

const Bio =(props) =>(
    <div className='Bio'>
        <h3><b>{props.name}</b></h3>
        <p>{props.title}</p>
    </div>
)

export default Bio