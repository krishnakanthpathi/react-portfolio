export default function Navbar(props) {
    const navclass = "navbar navbar-expand-lg "
    return(
        <nav className = { props.theme ? navclass + 'navbar-dark' : navclass  + "navbar-light"}>
            <div className="container">
            <a className="navbar-brand" href="#">Krishna Kanth Pathi</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
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