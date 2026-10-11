import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Honeypot check: silently drop submission if bot filled this field
        if (formData.get("website_trap")) {
            event.target.reset();
            return;
        }
        formData.delete("website_trap");

        // Web3Forms Access Key (from environment variable or fallback)
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
        formData.append("access_key", accessKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Thank you! Your message was submitted successfully.");
            event.target.reset();
        } else {
            console.error("Error", data);
            alert(data.message);
        }
    };

    return (
        <section id='contact' className='contact'>
            <div className="title-box">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="pattern" loading="lazy" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <p>I'm currently open to new opportunities, collaborations, or internships. If you have a project or position that matches my skills, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="email" /> <p><a href="mailto:kiranss2709@gmail.com">kiranss2709@gmail.com</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="phone" /> <p><a href="tel:+918050775481">+91 80507 75481</a></p>
                        </div>

                        <div className="contact-detail">
                            <FaGithub size={25} /> <p><a href="https://github.com/kiranss7" target="_blank" rel="noopener noreferrer">github.com/kiranss7</a></p>
                        </div>
                        <div className="contact-detail">
                            <FaLinkedin size={25} /> <p><a href="https://linkedin.com/in/kiranss-in" target="_blank" rel="noopener noreferrer">linkedin.com/in/kiranss-in</a></p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="location" /> <p><a href="https://maps.google.com/?q=Shivamogga,+Karnataka,+India" target="_blank" rel="noopener noreferrer">Shivamogga, Karnataka, India</a></p>
                        </div>

                    </div>
                </div>
                <form onSubmit={onSubmitHandler} className="contact-right">
                    {/* Honeypot field for spam bots */}
                    <input 
                        type="text" 
                        name="website_trap" 
                        className="honeypot-field" 
                        tabIndex="-1" 
                        autoComplete="off" 
                        aria-hidden="true" 
                    />
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="e.g., John Doe" name="name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="e.g., john@company.com" name="email" required />
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="8" placeholder="Write your message here..." required></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
