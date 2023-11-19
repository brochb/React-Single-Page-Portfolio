export default function Project({ title, description, deployedLink, repoLink, imageLink }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <img src={imageLink} alt={title} />
            </div>
            <div>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                    View Deployed
                </a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    View Repository
                </a>
            </div>
        </div>
    );
}