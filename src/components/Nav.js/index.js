function Nav() {
    return(
        <header className= "header">
            <h1 className="heading">Ashton Brugh</h1>
                <nav>
                    <ul className="nav">
                    <li>
                    <a className="noDecoration" href="#about">About Me</a>
                    </li>
                    <li>
                        <a className="noDecoration" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="noDecoration" href="#contact">Contact</a>
                    </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Nav;