

export default function Cards(props) {
    const theme = props.theme ? "text-light bg-dark" : "text-dark bg-light"
    return (
        <div className="col-md-4 mb-4 ">
            <div className={"card project-card " + theme}>
                <img src={props.image} alt="Blog Post Application"/>
                <div className={ "card-body " }>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.description} </p>
                        
                    <a href={props.github_link} className="btn mx-2 btn-outline-primary">View on GitHub</a>
                    <a href={props.website_link} className="btn btn-outline-secondary">View Website</a>
                </div>
            </div>
        </div>
    )
}



