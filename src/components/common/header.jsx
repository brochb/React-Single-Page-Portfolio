import { Link } from 'react-router-dom';
import Navigation from './navigation';

export default function Header() {
    return (
        <header>
            <h1>Broch B.</h1>
            <Navigation />
        </header>
    );
}