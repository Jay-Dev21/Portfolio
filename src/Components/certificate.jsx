import './certificate.css'
function Certificate() {
    return (
        <div className='project-cont'>
            <div className='project-box'>
                <div className='pro-box'>
                    <span>🎓</span>
                    <h3>Frontend Masters - Advanced React</h3>
                    <p>Frontend Masters</p>
                    <p>2023</p>
                </div>
                <div className='pro-box'>
                    <span>☁️</span>
                    <h3>AWS Certified Developer</h3>
                    <p>Amazon Web Services</p>
                    <p>2024</p>
                </div>
                <div className='pro-box'>
                    <span>📊</span>
                    <h3>Google Analytics Certification</h3>
                    <p>Google</p>
                    <p>2022</p>
                </div>
                <div className='pro-box' style={{margin: '30px 10px 10px 10px'}}>
                    <span>💾</span>
                    <h3>Mongo DB Basics</h3>
                    <p>MongoDB University</p>
                    <p>2023</p>
                </div>
            </div>
        </div>
    )
}
export default Certificate;