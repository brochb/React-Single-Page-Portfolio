export default function Footer() {
    return (
        <footer>
            <p>&copy; 2023 Your Name. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/brochb" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/broch-baltzer-90a337289/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {/* Add links to other platforms */}
                {/* Example: */}
                <a href="https://stackoverflow.com/users/comingsoon" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
            </div>
        </footer>
    );
}