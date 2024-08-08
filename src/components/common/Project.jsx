import '../../styles/project.css'

export default function Project({ title, description, deployedLink, repoLink, imageLink }) {
    return (
        <div className="project-card-container">
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    <img src={imageLink} alt={title} style={{ maxWidth: '100%', maxHeight: '300px' }} />
                </a>
            </div>
            <div>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                    View Deployed   
                </a>
            </div>
            <div>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    View Repository
                </a>
            </div>
        </div>
        </div>
    );
}