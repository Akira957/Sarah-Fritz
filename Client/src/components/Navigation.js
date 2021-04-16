import React from 'react';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Fritz</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Artwork">Artwork</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Categories">Categories</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;