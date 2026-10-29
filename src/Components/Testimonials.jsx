import './Testimonials.css'
function Testimonial() {
    return (
        <div className='testimonial-body'>
            <h2>Testimonials</h2>
            <div className='testi-grid'>
                <div className='testi-box'>
                    <p>
                        "Working with you was seamless. Delivery was 
                        fast, clean, and exceeded expectations."
                    </p>
                    <div className='testi-para'>
                        <h3>John Doe</h3>
                        <p>Product Manager - Fintech Corp.</p>
                    </div>
                </div>
                <div className='testi-box'>
                    <p>
                        "Highly professional developer.
                        Communication and execution were top-notch.”
                    </p>
                    <div className='testi-para'>
                        <h3>Sarah Ahmad</h3>
                        <p>Startup Founder - PayStack Partner</p>
                    </div>
                </div>
                <div className='testi-box'>
                    <p>
                        "Strong technical knowledge and very reliable.
                        Would definitely work together again."
                    </p>
                    <div className='testi-para'>
                        <h3>Micheal Lee</h3>
                        <p>CTO - Web3 Startup</p>
                    </div>
                </div>
                <div className='testi-box'>
                    <p>
                        “Your attention to detail and problem-
                        solving skills helped us scale our platform efficiently.”
                    </p>
                    <div className='testi-para'>
                        <h3>Daniel Okafor</h3>
                        <p>CEO - TechNova Africa</p>
                    </div>
                </div>
                <div className='testi-box'>
                    <p>
                       "Clean code, great collaboration, 
                       and a strong understanding of product needs.”
                    </p>
                    <div className='testi-para'>
                        <h3>Aisha Bello</h3>
                        <p>UI/UX Designer - DesignMint.</p>
                    </div>
                </div>
                <div className='testi-box'>
                    <p>
                        "Very dependable and technically solid. 
                        Always delivered on time with quality.”
                    </p>
                    <div className='testi-para'>
                        <h3>Sanuel Johnson</h3>
                        <p>Software Engineer · CloudX Systems</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;