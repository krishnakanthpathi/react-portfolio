import { Link } from "react-router-dom"

export default function Navbar(props) {
    const navclass = "navbar navbar-expand-lg "
    return(
        <nav className = { props.theme ? navclass + 'navbar-dark' : navclass  + "navbar-light"}>
            <div className="container">
            <Link className="navbar-brand" to="/" href="#">Krishna Kanth Pathi</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Ai">Ai</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Achievements">Achievements</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>

                <li className="nav-item">
                    <button id="toggle-theme" onClick={props.darkmode} className={!props.theme ? "btn btn-dark" : "btn btn-light"}>
                        {props.theme ? "Light" : "Dark"} Mode</button>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )

}