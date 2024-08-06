export default function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Broch Baltzer. All rights reserved.</p>
            <div className="social-links">
                <section><a href="https://github.com/brochb" target="_blank" rel="noopener noreferrer">GitHub</a></section>
                <section><a href="https://www.linkedin.com/in/broch-baltzer-90a337289/" target="_blank" rel="noopener noreferrer">LinkedIn</a></section>
                {/* Add links to other platforms */}
                {/* Example: */}
                <section><a href="https://stackoverflow.com/users/comingsoon" target="_blank" rel="noopener noreferrer">Stack Overflow</a></section>
            </div>
        </footer>
    );
}