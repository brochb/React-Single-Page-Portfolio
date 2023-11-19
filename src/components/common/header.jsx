import { Link } from 'react-router-dom';
import Navigation from './navigation';

export default function Header() {
    return (
        <header>
            <h1>Your Name</h1>
            <Navigation />
        </header>
    );
}