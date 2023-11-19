export default function Navbar({ links }) {
    return (
        <nav>
            {links.map((link, index) => (
                <div key={index}>{link}</div>
            ))}
        </nav>
    );
}