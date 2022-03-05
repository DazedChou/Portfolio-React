import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="main-header-menu d-flex list-group w-100">
            <ul className="nav nav-tabs space-between align-items-center d-flex flex-row justify-content-center">
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link text-white' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#project"
                        onClick={() => handlePageChange('Project')}
                        className={currentPage === 'Project' ? 'nav-link text-white' : 'nav-link'}
                    >
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link text-white' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link text-white' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>


        // <nav>
        //     <ul class="flex-row">
        //         <li class="mx-5 navActive" key="1"><span>About me</span></li>
        //         <li class="mx-5 false" key="2"><span>Portfolio</span></li>
        //         <li class="mx-5 false" key="3"><span>Contact</span></li>
        //         <li class="mx-5 false" key="4"><span>Resume</span></li>
        //     </ul>
        // </nav>

        // <nav className="main-header-menu d-flex list-group w-100">
        //     <section
        //         className='space-between align-items-center d-flex flex-row justify-content-end'
        //     >
        //         <div style={linkStyle}>
        //             <a href="#">Home</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href="#">Login</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href="#">Register</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href="#">About</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href="#">Contact</a>
        //         </div>
        //     </section>
        // </nav>

        // <div className="list-group d-inline-flex flex-row space-between">
        //     <a href="#" className="list-group-item list-group-item-action active" key='1'>
        //         About Me
        //     </a>
        //     <a href="#" className="list-group-item list-group-item-action" key='2'>Projects</a>
        //     <a href="#" className="list-group-item list-group-item-action" key='3' >Projects</a>
        //     <a href="#" className="list-group-item list-group-item-action"key='4' >Porta ac consectetur ac</a>
        //     <a href="#" className="list-group-item list-group-item-action disabled"key='5'>Vestibulum at eros</a>
        // </div>
    )
};

export default Nav;