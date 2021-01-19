import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Resume Builder</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/edit" className="nav-link">Edit</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/view" className="nav-link">View</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
