import Cards from "./Cards"
import ProjectsData from "../data/ProjectsData"


export default function Projects() {
    
    const projects = ProjectsData.map((project) => {
        return ( 
            <Cards 
                title = {project.title} 
                description = {project.description}
                image = {project.image}
                alt = {project.alt}
                github_link = {project.github_link}
                website_link = {project.website_link}
            />
        )
    })


    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="row mt-4">
                    {projects}
                </div>
                
            </div>
        </section>

    )

}



  