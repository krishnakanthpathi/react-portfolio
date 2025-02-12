import Cards from "./Cards"
import ProjectsData from "../data/ProjectsData"


export default function Projects(props) {
    // array of jsx objects
    const projects = ProjectsData.map((project) =>  (  
            <Cards 
                key={project.id} 
                theme={props.theme}
                {...project}
            />
        ))


    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="row mt-4">
                    {/* this only expects jsx objects to display */}
                    {projects}
                </div>
                
            </div>
        </section>

    )

}



  