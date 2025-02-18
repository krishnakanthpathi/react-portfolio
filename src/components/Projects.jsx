import Cards from "./Cards"
import React from 'react';
import { useEffect, useState } from 'react';


export default function Projects(props) {
    // array of jsx objects
    const url = "https://portfolio-backend-bs6x.onrender.com/projects";
    const [ProjectsData, setProjects] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json(); // Convert response to JSON
            setProjects(data);
        };

        getData();
    }, []); 

    const projects = ProjectsData.map((project) =>  (  
            <Cards 
                key={project._id} 
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



  