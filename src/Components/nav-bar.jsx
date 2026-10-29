import './header.css'
function Header() {
    return (
        <>
            <header className='header'>
                <h2 className="text">
                    My Portfolio
                    <a href=""></a>
                </h2>
                <div className='nav-div'>
                    <a href="#home" className='nav-bar'>Home </a>
                    <a href="#about" className='nav-bar'>About</a>
                    <a href="#skills" className='nav-bar'>Skills</a>
                    <a href="#certificates" className='nav-bar'>Certificates</a>
                    <a href="#projects" className='nav-bar'>Projects</a>
                    <a href="#contact" className='nav-bar'>Contact</a>
               </div>
            </header>
        </>
    )
}

export default Header;