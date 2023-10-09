import React from 'react'

export const Navbar = () => {
    return (
    <div>
        <div class="container">
            <navbar class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

                <span class="fs-4">Rick&Morty</span>
            </a>

            <ul class="nav nav-pills p-3">
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            </ul>
            </navbar>
        </div>
    </div>
    )
}
