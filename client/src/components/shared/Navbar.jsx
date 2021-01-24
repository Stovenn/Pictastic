import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Pictastic</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Exercise </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Create Exercise</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
