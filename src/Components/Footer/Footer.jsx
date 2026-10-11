import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-top">
                <h2 className="footer-logo-text">Kiran <span>S S</span></h2>
                <div className="footer-social-icons">
                    <a href="https://github.com/kiranss7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/kiranss-in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="mailto:kiranss2709@gmail.com" aria-label="Email"><FaEnvelope /></a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2026 Kiran S S. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
