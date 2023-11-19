import Project from '../common/Project';

const projects = [
    {
        title: 'Project 1',
        description: 'Description for Project 1',
        deployedLink: 'https://deployed-link-for-project-1.com',
        repoLink: 'https://github.com/your-username/project-1',
        imageLink: 'https://image-link-for-project-1.com',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        deployedLink: 'https://deployed-link-for-project-2.com',
        repoLink: 'https://github.com/your-username/project-2',
        imageLink: 'https://image-link-for-project-2.com',
    },
];


export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    deployedLink={project.deployedLink}
                    repoLink={project.repoLink}
                    imageLink={project.imageLink}
                />
            ))}
        </div>
    );
}