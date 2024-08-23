import ProjectTopBack from '../backgroundsComp/projectTopBack/ProjectTopBack';
import './project.css';
import Projects from '../dataComp/Data';

function Project({ id, title, subtitle, showBackground, MarginNone }) {
    const project = Projects.find((project) => project.id === id);
    return (
        <div className='project' id='project'>
            { showBackground && <ProjectTopBack /> }
            <div className='project__info'>
                {MarginNone &&
                    <div className="project__text-content">
                        <h1 className='project__title'>{title}</h1>
                        <p className='project__subtitle'>{subtitle}</p>
                    </div>
                }
                <div className='project__hero-container'>
                    <div className='project__hero'>
                        <img className='project__hero-img' src={project.projectImage} alt={project.projectTitle} />
                    </div>
                    <div className="project__info-content">
                        <h2 className='project__info-title'>{project.projectTitle}</h2>
                        <p className='project__info-text'>{project.projectSubtitle}</p>
                        <div className='project__skills'>
                            {project.projectSkills.map((skill, index) => (
                                <img key={index} src={skill.src} alt={skill.alt} className='project__skill-img' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
