
import { Link } from "react-router-dom";
import './Navigation.css'
import { FC } from 'react'

const Navigation: FC = () => {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/o-mnie">O mnie</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    )
}

export default Navigation