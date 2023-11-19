import profileImage from '../../../public/avatar.jpg'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={profileImage} alt="Profile" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <p>
                A self driven, goal seeking coder looking for room to develop, and grow in my skills.
            </p>
        </div>
    );
}