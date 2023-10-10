import React from 'react'

export const Card = ({personaje}) => { 



    return (
<div>
    <div class="col">
        <div class="card shadow-sm ">
        <img width="100%" src={personaje.image} alt="imagen"/>
        <div class="card-body">
                    <h3 class="card-text">{personaje.name}</h3>
                    <p>Status: {personaje.status}</p>
                    <p>Species: {personaje.species}</p>
                    <p>Gender: {personaje.gender}</p>
        </div>
        </div>
    </div>
</div>
    )
}
