import './Portfolio.css'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <div id="projects" style={{ position: 'relative', top: '-100px' }} aria-hidden="true"></div>
            <div className="title-box">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="pattern" loading="lazy" />
            </div>
            <div className="portfolio-container">
                {mywork_data.map((work) => (
                    <div key={work.w_no} className="portfolio-work-card">
                        <img className="portfolio-img" src={work.w_img} alt={work.w_name} loading="lazy" />
                        <div className="portfolio-details">
                            <h3>{work.w_name}</h3>
                            {work.description && <p className="portfolio-desc">{work.description}</p>}
                            {work.technologies && (
                                <div className="portfolio-tech">
                                    {work.technologies.map((tech) => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            )}
                            {(work.demo_link || work.github_link) && (
                                <div className="portfolio-links">
                                    {work.demo_link && (
                                        <a href={work.demo_link} target="_blank" rel="noopener noreferrer" className="portfolio-btn demo-btn">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    {work.github_link && (
                                        <a href={work.github_link} target="_blank" rel="noopener noreferrer" className="portfolio-btn github-btn">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <a
                href="https://github.com/kiranss7"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-showmore"
                aria-label="View more repositories on GitHub"
            >
                <p>View More Repositories on GitHub</p>
                <FaGithub className="showmore-icon" />
            </a>
        </section>
    )
}

export default Portfolio
