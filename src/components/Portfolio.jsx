import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Project 1',
        description: 'Description of Project 1.',
        deployedLink: 'https://example.com/project1',
        repoLink: 'https://github.com/example/project1',
        imageLink: 'https://via.placeholder.com/150', // Replace with actual image link
    },
    {
        title: 'Project 2',
        description: 'Description of Project 2.',
        deployedLink: 'https://example.com/project2',
        repoLink: 'https://github.com/example/project2',
        imageLink: 'https://via.placeholder.com/150', // Replace with actual image link
    },
    {
        title: 'Project 3',
        description: 'Description of Project 3.',
        deployedLink: 'https://example.com/project3',
        repoLink: 'https://github.com/example/project3',
        imageLink: 'https://via.placeholder.com/150', // Replace with actual image link
    },
    {
        title: 'Project 4',
        description: 'Description of Project 4.',
        deployedLink: 'https://example.com/project4',
        repoLink: 'https://github.com/example/project4',
        imageLink: 'https://via.placeholder.com/150', // Replace with actual image link
    },
    {
        title: 'Project 5',
        description: 'Description of Project 5.',
        deployedLink: 'https://example.com/project5',
        repoLink: 'https://github.com/example/project5',
        imageLink: 'https://via.placeholder.com/150', // Replace with actual image link
    },
    {
        title: 'Project 6',
        description: 'Description of Project 6.',
        deployedLink: 'https://example.com/project6',
        repoLink: 'https://github.com/example/project6',
        imageLink: 'https://via.placeholder.com/150', // Replace with actual image link
    },
];

function Portfolio() {
    return (
        <div className="portfolio-container">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div>
                        <img src={project.imageLink} alt={project.title} />
                    </div>
                    <div>
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                            View Deployed
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            View Repository
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
