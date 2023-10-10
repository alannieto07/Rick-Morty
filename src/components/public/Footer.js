import React from 'react'

export const Footer = () => {

const year = new Date().getFullYear();
const companyName = "Rick&Morty";

    return (
<div>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary">&copy; {year} {companyName}, Inc</p>

            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                
            </a>

            </footer>
    </div>
</div>
    )
}
