export default function Skills() {
    return(
        <>
          <section className="container py-5 {props.theme ? 'text-light' : 'text-dark'} text-center">
            <h2 className="section-title">Skills</h2>
            <div className="text-center mt-3">
                <div className="skills-icons d-flex flex-wrap justify-content-center">
                    <div className="skill-item mx-3 my-2">
                        <i className="fab mx-2 fa-java skill-icons java-icon"></i>
                        <span>Java</span>
                    </div>
                    <div className="skill-item mx-3 my-2">
                        <i className="fab mx-2 fa-python skill-icons python-icon"></i>
                        <span>Python</span>
                    </div>
                    <div className="skill-item mx-3 my-2">
                        <i className="fab mx-2 fa-js-square skill-icons js-icon"></i>
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-item mx-3 my-2">
                        <i className="fab mx-2 fa-react skill-icons react-icon"></i>
                        <span>React</span>
                    </div>
                    <div className="skill-item mx-3 my-2">
                        <i className="fas mx-2 fa-database skill-icons sql-icon"></i>
                        <span>SQL</span>
                    </div>
                    <div className="skill-item mx-3 my-2">
                        <i className="fab mx-2 fa-bootstrap skill-icons bootstrap-icon"></i>
                        <span>Bootstrap</span>
                    </div>
                    <div className="skill-item mx-3 my-2">
                        <i className="fab mx-2 fa-git-alt skill-icons git-icon"></i>
                        <span>Git</span>
                    </div>
            </div>


            </div>
            <p className="text-center mt-4">Skilled in Data Structures and Algorithms with over 1000 problems solved on LeetCode.</p>
            <p className="text-center mt-2">Passionate to Become a Full Stack Web Developer</p>
        </section>
        </>
    )

}