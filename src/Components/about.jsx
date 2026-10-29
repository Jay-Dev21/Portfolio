import './about.css';
function About() {
    return (
        <div className="about">
            <p className='big'>
                I am a self taught developer, skilled in HTML, CSS, JavaScript, <br />
                React and backend technologies like Express and <br />
                Mysql. I enjoy building apps that make life easier. <br />
                I have a passion for creating beautiful and functional web applications. <br />
                I am always looking to learn new technologies and improve my skills.  <br />
            </p>
            <div className='smalls'>
                <p className='small'>Frontend: React, Javascript, HTML, CSS</p>
                <p className='small'>Backend: Node.js, Express.js, Mysql</p>
                <p className='small'>Tools: Git, APIs, Authentication </p>
            </div>
        </div>
    );
}
export default About;