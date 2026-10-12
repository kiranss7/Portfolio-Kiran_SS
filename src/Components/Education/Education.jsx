import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const educationData = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Jawaharlal Nehru New College of Engineering, Shivamogga",
        meta: "2025 – 2027 (Expected) \u00A0•\u00A0 CGPA: 8.08 / 10"
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "PES Institute of Advanced Management Studies, Shivamogga",
        meta: "2021 – 2024 \u00A0•\u00A0 CGPA: 8.22 / 10"
    }
];

const Education = () => {
    return (
        <section id='education' className='education'>
            <div className="title-box">
                <h1>Education</h1>
                <img src={theme_pattern} alt="pattern" loading="lazy" />
            </div>
            <div className="education-container">
                {educationData.map((item) => (
                    <div key={item.degree} className="education-item">
                        <h2>{item.degree}</h2>
                        <h3>{item.institution}</h3>
                        <p className="education-meta">{item.meta}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education
