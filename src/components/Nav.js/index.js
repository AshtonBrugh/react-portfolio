function Nav({ currentPage, handlePageChange}) {
    return(
        <ul className="nav">
            <li>
                <a href="#about"
                    onClick={() => handlePageChange('About')}

                    className={currentPage === 'About' ? 'nav-item-active' : 'nav-item'}
                >
                    About
                </a>
            </li>
            <li>
                <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}

                    className={currentPage === 'Portfolio' ? 'nav-item-active' : 'nav-item'}
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#contact"
                    onClick={() => handlePageChange('Contact')}

                    className={currentPage === 'Contact' ? 'nav-item-active' : 'nav-item'}
                >
                    Contact
                </a>
            </li>
            <li>
                <a href="#resume"
                    onClick={() => handlePageChange('Resume')}

                    className={currentPage === 'Resume' ? 'nav-item-active' : 'nav-item'}
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Nav;