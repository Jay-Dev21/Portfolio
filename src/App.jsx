import "./App.css"
import Header from './Components/nav-bar.jsx';
import Home from './Components/home.jsx';
import About from './Components/about.jsx';
import Skills from "./Components/skills.jsx";
import Certificate from "./Components/certificate.jsx";
import Project from "./Components/project.jsx";
import Services from "./Components/Services.jsx";
import Testimonial from "./Components/Testimonials.jsx";
import Contact from "./Components/contact.jsx";
import Footer from "./Components/footer.jsx";
import FAQ from "./Components/FAQs.jsx"
export default function App()  {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
    return (
        <>
          <Header />
        <div className="floating-btns">
          <a href="#contact" 
          className="float-btn contact-btn"
          title="contact Me">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone preview-icon">
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
          </svg>
          </a>
          <a href="https://wa.me/2348127454625"
          className="float-btn whatsapp-btn"
          target="blank"
          rel="noopener noreferrer"
          title="Chat on Whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-message-square preview-icon">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </a>
          <button className="float-btn top-btn"
          id="backToTop"
          title="Back to Top"
          onClick={backToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-arrow-up preview-icon">
            <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
            </svg>
          </button>
        </div>
          <section id='home'>
          <Home />
          </section>
          <section id='about'>
          <About />
          </section>
          <section id='skills'>
          <Skills />
          </section>
          <section id="certificates">
            <Certificate />
          </section>
          <Services />
          <section id="projects">
            <Project />
          </section>
          <Testimonial />
          <FAQ />
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </>
    ) 
}