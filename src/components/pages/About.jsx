import profileImage from '../../../public/avatar.jpg'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={profileImage} alt="Profile" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p>
                Hello, and welcome to my active portfolio! In this webpage I have developed a Single Page Application in which you can browse multiple pages, showcasing HMR technology built using vite, react, and express. I am a self driven, goal seeking coder looking for room to develop, and grow in my skills.
            </p>
        </div>
    );
}