import Project from '../common/Project';

const projects = [
    //Workday Scheduler
    {
        title: 'Workday Scheduler',
        description: 'A simple calendar app for scheduling your work day',
        deployedLink: 'https://brochb.github.io/workDayScheduler/',
        repoLink: 'https://github.com/brochb/workDayScheduler',
        imageLink: 'https://screenshots.codesandbox.io/zozvj/10.png',
    },
    //The Book Search Extraordinaire
    {
        title: 'The Book Search Extraordinaire',
        description: ' This application is designed to make finding your next book to read easier then it was before!',
        deployedLink: 'https://brochb.github.io/group-project1/',
        repoLink: 'https://github.com/brochb/group-project1',
        imageLink: 'https://i.etsystatic.com/16895790/r/il/a289d9/4841007885/il_570xN.4841007885_potp.jpg',
    },
    //Pre-Work Study Guide
    {
        title: 'Pre-Work Study Guide',
        description: 'A Study Guide Developed to Fascilitate Both Study, and Organization of Notes while navigating Pre-Work',
        deployedLink: 'https://brochb.github.io/prework-study-guide/',
        repoLink: 'https://github.com/brochb/prework-study-guide',
        imageLink: 'data:image/jpeg;base64,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',
    },
    //The Incredible Quiz
    {
        title: 'The Incredible Quiz',
        description: 'This is a basic web application that showcases timers, browser storage, and page navigation.',
        deployedLink: 'https://brochb.github.io/theIncredibleQuiz/',
        repoLink: 'https://github.com/brochb/theIncredibleQuiz',
        imageLink: 'data:image/jpeg;base64,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',
    },
    //Create README.md
    {
        title: 'Create README.md',
        description: 'This application is a CLI that allows you to rapidly create README.md files for your projects.',
        deployedLink: 'NONE, please see the README associated with the project for functionality, and instructions on usage.',
        repoLink: 'https://github.com/brochb/Create-README.md',
        imageLink: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png',
    },
    //SVG Generator
    {
        title: 'SVG Generator',
        description: 'This application is a CLI that will create a simple SVG image for you scalable up to 3 characters.',
        deployedLink: 'NONE, please see the README associated with the project for functionality, and instructions on usage.',
        repoLink: 'https://github.com/brochb/SVG-Generator',
        imageLink: 'https://static.javatpoint.com/svg/images/svg-tutorial.png',
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