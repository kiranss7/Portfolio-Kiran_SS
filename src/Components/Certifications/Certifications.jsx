import './Certifications.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaExternalLinkAlt, FaFilePdf, FaAward, FaCalendarAlt } from 'react-icons/fa'

const certificationsData = [
    {
        title: "SQL (Basic) Skill Certification",
        issuer: "HackerRank",
        date: "Jan 2025",
        credentialId: "A6804DFC6FDF",
        credentialLabel: "Credential / Ref ID",
        skills: ['SQL', 'Relational Databases', 'Queries', 'Data Filtering'],
        pdfPath: "/certificates/HackerRank_SQL_Basic.pdf",
        verifyLink: "https://www.hackerrank.com/certificates/a6804dfc6fdf"
    },
    {
        title: "Python Full Stack Development",
        issuer: "Pentagon Space",
        date: "2024 – 2025",
        credentialId: "PS1594 / Batch #002",
        credentialLabel: "Credential / Batch ID",
        skills: ['Python', 'Full Stack Architecture', 'REST APIs', 'Database Design'],
        pdfPath: "/certificates/Python_Full_Stack.pdf",
        verifyLink: null
    },
    {
        title: "Machine Learning using Python (Internship)",
        issuer: "Cranes Varsity (PES ITAM)",
        date: "Mar 2024 (80 Hours)",
        credentialId: "AICTE Reg: 61216204108051630495236",
        credentialLabel: "Registration / Ref ID",
        skills: ['Python', 'Machine Learning', 'Algorithms', 'Data Analysis'],
        pdfPath: "/certificates/Python%20ML%20Intern.pdf",
        verifyLink: null
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications scroll-mt-24">
            <div className="title-box">
                <h1>Certifications<span className="text-purple-500">.</span></h1>
                <img src={theme_pattern} alt="pattern" loading="lazy" />
            </div>

            <div className="certifications-grid">
                {certificationsData.map((cert) => (
                    <article key={cert.title} className="certification-card">
                        <div className="certification-header">
                            <div className="cert-icon-wrapper" aria-hidden="true">
                                <FaAward className="cert-icon" />
                            </div>
                            <div className="cert-header-meta">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <span className="cert-date">
                                    <FaCalendarAlt className="date-icon" /> {cert.date}
                                </span>
                            </div>
                        </div>

                        <div className="certification-body">
                            <h2 className="cert-title">{cert.title}</h2>
                            <div className="cert-id-badge">
                                <span className="cert-id-label">{cert.credentialLabel}:</span>
                                <span className="cert-id-value">{cert.credentialId}</span>
                            </div>

                            <div className="cert-skills">
                                {cert.skills.map((skill) => (
                                    <span key={skill} className="cert-skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="certification-actions">
                            <a
                                href={cert.pdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-btn cert-btn-primary"
                                aria-label={`Open ${cert.title} PDF certificate in new tab`}
                            >
                                <FaFilePdf className="btn-icon" />
                                <span>View Certificate</span>
                            </a>
                            {cert.verifyLink && (
                                <a
                                    href={cert.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-btn cert-btn-secondary"
                                    aria-label={`Verify ${cert.title} online credential`}
                                >
                                    <FaExternalLinkAlt className="btn-icon" />
                                    <span>Verify Online</span>
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
