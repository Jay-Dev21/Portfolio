import './contact.css'
function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            "Thank you for your message! " +
            "This demo form is not connected to a server yet."
            );
        };

    return (
        <>
        <form action="" id="contactForm" onSubmit={handleSubmit}>
            <input type="text" placeholder='Your Name' required title='Input your name' />
            <input type="email" placeholder='Your Email' required title='Input your email' />
            <textarea name="message" id="" required placeholder='Your Message' rows={8} cols={60} title='Input your message'></textarea>
            <button>Send Message</button>
        </form>
        </>
    )
}
export default Contact;