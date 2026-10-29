import './FAQs.css'
function FAQ() {
    return (
        <div className='faq-body'>
            <h2>Frequently Asked Questions</h2>
            <div className='faq-list'>
                <div className='faq-item'>
                    <button className='faq-question'>
                        <span>Are you available for freelance work?</span>
                        <span className='faq-icon'>+</span>
                    </button>
                    <div className='faq-answer' id='ans1' hidden>
                        Yes! I am available for freelance project
                        Feel free to contact me to discuss your project,
                        requirements, budject, and timeline.
                    </div>
                </div>
                <div className='faq-item'>
                    <button className='faq-question'>
                        <span>What technologies do you specialize in?</span>
                        <span className='faq-icon'>+</span>
                    </button>
                    <div className='faq-answer' id='ans2' hidden>
                       I specialize in HTML, CSS, JavaScript, and responsive
                       web design. I also work with modern web technologies
                       depending on the needs of each project.
                    </div>
                </div>
                <div className='faq-item'>
                    <button className='faq-question'>
                        <span>How long does a project usually take?</span>
                        <span className='faq-icon'>+</span>
                    </button>
                    <div className='faq-answer' id='ans3' hidden>
                        Project timelines depend on complexity, but most
                        projects take between 1 - 4 weeks. I will provide a
                        more accurate estimate after discussing your needs.
                    </div>
                </div>
                <div className='faq-item'>
                    <button className='faq-question'>
                        <span>Do you offer maintenance after project delivery??</span>
                        <span className='faq-icon'>+</span>
                    </button>
                    <div className='faq-answer' id='ans4' hidden>
                        Yes. I can help with website updates, bug fixes,
                        performance improvements, and ongoing maintenance
                        after the project has been delivered.
                    </div>
                </div>
                <div className='faq-item'>
                    <button className='faq-question'>
                        <span>Can you work with existing designs or codebases?</span>
                        <span className='faq-icon'>+</span>
                    </button>
                    <div className='faq-answer' id='ans5' hidden>
                        Absolutely! I can work with existing website designs,
                        improve current layouts, fix issues, and add new
                        features to existing codebases.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQ;