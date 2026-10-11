import './About.css'
import profile_img from '../../assets/about_profile.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import { 
    FaReact, 
    FaJs, 
    FaHtml5, 
    FaCss3Alt, 
    FaGitAlt, 
    FaGithub, 
    FaJava, 
    FaPython 
} from 'react-icons/fa'
import { 
    SiTailwindcss, 
    SiRedux,
    SiMysql, 
    SiVite, 
    SiVercel, 
    SiPostman
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML5", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
            { name: "CSS3", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
            { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
            { name: "React.js", icon: <FaReact style={{ color: "#61DAFB" }} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#06B6D4" }} /> },
            { name: "Redux Toolkit", icon: <SiRedux style={{ color: "#764ABC" }} /> },
        ]
    },
    {
        category: "Backend & Database",
        skills: [
            { name: "Java", icon: <FaJava style={{ color: "#ED8B00" }} /> },
            { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
            { name: "MySQL", icon: <SiMysql style={{ color: "#00B4D8" }} />, textColor: "#E5E7EB" },
        ]
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
            { name: "GitHub", icon: <FaGithub style={{ color: "#FFFFFF" }} /> },
            { name: "VS Code", icon: <VscVscode style={{ color: "#007ACC" }} /> },
            { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
            { name: "Vite", icon: <SiVite style={{ color: "#646CFF" }} /> },
            { name: "Vercel", icon: <SiVercel style={{ color: "#FFFFFF" }} /> },
        ]
    }
];

const About = () => {
    return (
        <section id='about' className='about'>
            <div className="title-box">
                <h1>About me</h1>
                <img src={theme_pattern} alt="pattern" loading="lazy" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="profile" loading="lazy" width="320" height="480" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>MCA student with hands-on experience developing single-page applications in React and modern JavaScript. Strong foundation in component architecture, state management, and responsive layout design.</p>
                    </div>
                    <div className="about-tech-stack">
                        {skillCategories.map((cat) => (
                            <div key={cat.category} className="tech-category">
                                <h3 className="tech-category-title">{cat.category}</h3>
                                <div className="tech-pills">
                                    {cat.skills.map((skill) => (
                                        <div key={skill.name} className="tech-pill">
                                            <span className="tech-pill-icon">{skill.icon}</span>
                                            <span 
                                                className="tech-pill-name"
                                                style={skill.textColor ? { color: skill.textColor } : undefined}
                                            >
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
