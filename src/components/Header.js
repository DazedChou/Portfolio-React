import React from 'react';
import Nav from './Nav';

function Header({currentPage, handlePageChange}) {
    return (
        <header className="d-inline-flex flex-column space-between px-1 w-100 align-items-center align-center justify-content-around">
            <div className='h2'>David Chou</div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* <img src="/" alt="background" /> */}
                {/* <Nav handlePageChange={handlePageChange} currentPage={currentPage}/> */}
        </header>
    )
};

export default Header;