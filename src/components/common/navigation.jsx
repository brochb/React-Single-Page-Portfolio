import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'About Me' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/contact', label: 'Contact' },
        { to: '/resume', label: 'Resume' },
    ];

    return (
        <nav>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link className={location.pathname === link.to ? 'active' : ''} to={link.to}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
