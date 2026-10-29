import { useState } from 'react';
import './FAQs.css';

function FAQ() {
const [activeIndex, setActiveIndex] = useState(null);
const faqs = [
    {
        question: 'Are you available for freelance work?',
        answer: 'Yes! I am available for freelance projects. Feel free to contact me to discuss your project requirements, budget, and timeline.'
    },
    {
        question: 'What technologies do you specialize in?',
        answer: 'I specialize in HTML, CSS, JavaScript, and responsive web design. I also work with modern web technologies depending on the needs of each project.'
    },
    {
        question: 'How long does a project usually take?',
        answer: 'Project timelines depend on complexity, but most projects take between 1 and 4 weeks. I will provide a more accurate estimate after discussing your needs.'
    },
    {
        question: 'Do you offer maintenance after project delivery?',
        answer: 'Yes. I can help with website updates, bug fixes, performance improvements, and ongoing maintenance after the project has been delivered.'
    },
    {
        question: 'Can you work with existing designs or codebases?',
        answer: 'Absolutely! I can work with existing website designs, improve current layouts, fix issues, and add new features to existing codebases.'
    }
];

function toggleFAQ(index) {
    setActiveIndex((currentIndex) =>
        currentIndex === index ? null : index
    );
}

return (
    <div className="faq-body">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
            {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                    <div
                        className={`faq-item ${isOpen ? 'active' : ''}`}
                        key={faq.question}
                    >
                        <button
                            className="faq-question"
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>

                            <span className="faq-icon" aria-hidden="true">
                                {isOpen ? '−' : '+'}
                            </span>
                        </button>

                        <div
                            className="faq-answer"
                            id={`faq-answer-${index}`}
                            hidden={!isOpen}
                        >
                            {faq.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
}

export default FAQ;
