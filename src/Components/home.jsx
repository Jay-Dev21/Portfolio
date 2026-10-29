import './home.css'
function Home() {
    return(
        <>
         <div className='hero'>
            <img src="./me.png" alt="" />
            <h2>Hello, I'm Paul Deji.</h2>
            <p>A passionate Web developer creating clean and functional design</p>
            <div className='hero-btn'>
                <a href="#projects"> View Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
         </div>
        </>
    )
}
export default Home