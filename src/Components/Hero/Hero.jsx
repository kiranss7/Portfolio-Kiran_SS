import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import resume from '../../assets/My Resume.pdf'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <img src={profile_img} alt="Kiran S S" width="200" height="200" fetchPriority="high" />
            <h1>
                <span>I'm Kiran S S,</span> a Frontend Developer & MCA Candidate.
            </h1>
            <p>
                Specializing in React, JavaScript, and Tailwind CSS. Focused on building responsive, performant web applications and clean user experiences.
            </p>
            <div className='hero-action'>
                <a href={resume} target="_blank" rel="noopener noreferrer" className='hero-resume-btn'>
                    My Resume
                </a>
                <Link to="contact" smooth={true} offset={-100} duration={500} className='hero-connect-btn'>
                    Connect With Me
                </Link>
            </div>
        </section>
    )
}

export default Hero
