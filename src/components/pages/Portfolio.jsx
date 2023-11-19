import Project from '../common/Project';

const projects = [
    {
        title: 'Create README.md',
        description: 'This application is a CLI that allows you to rapidly create README.md files for your projects.',
        deployedLink: 'NONE, please see the README associated with the project for functionality, and instructions on usage.',
        repoLink: 'https://github.com/brochb/Create-README.md',
        imageLink: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        deployedLink: 'https://deployed-link-for-project-2.com',
        repoLink: 'https://github.com/your-username/project-2',
        imageLink: 'https://image-link-for-project-2.com',
    },
    {
        title: 'Project 3',
        description: 'Description for Project 3',
        deployedLink: 'https://deployed-link-for-project-3.com',
        repoLink: 'https://github.com/your-username/project-3',
        imageLink: 'https://image-link-for-project-3.com',
    },
    {
        title: 'Project 4',
        description: 'Description for Project 4',
        deployedLink: 'https://deployed-link-for-project-4.com',
        repoLink: 'https://github.com/your-username/project-4',
        imageLink: 'https://image-link-for-project-4.com',
    },
    {
        title: 'Project 5',
        description: 'Description for Project 5',
        deployedLink: 'https://deployed-link-for-project-5.com',
        repoLink: 'https://github.com/your-username/project-5',
        imageLink: 'https://image-link-for-project-5.com',
    },
    {
        title: 'Project 6',
        description: 'Description for Project 6',
        deployedLink: 'https://deployed-link-for-project-6.com',
        repoLink: 'https://github.com/your-username/project-6',
        imageLink: 'https://image-link-for-project-6.com',
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