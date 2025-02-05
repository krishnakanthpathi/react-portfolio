export default function Skills() {
    return(
        <>
          <section className="container py-5">
            <h2 className="section-title">Skills</h2>
            <div className="text-center mt-4">
            <div class="skills-icons d-flex flex-wrap justify-content-center">
                <div class="skill-item mx-3 my-2">
                    <i class="fab fa-java skill-icons java-icon"></i>
                    <span>Java</span>
                </div>
                <div class="skill-item mx-3 my-2">
                    <i class="fab fa-python skill-icons python-icon"></i>
                    <span>Python</span>
                </div>
                <div class="skill-item mx-3 my-2">
                    <i class="fab fa-js-square skill-icons js-icon"></i>
                    <span>JavaScript</span>
                </div>
                <div class="skill-item mx-3 my-2">
                    <i class="fab fa-react skill-icons react-icon"></i>
                    <span>React</span>
                </div>
                <div class="skill-item mx-3 my-2">
                    <i class="fas fa-database skill-icons sql-icon"></i>
                    <span>SQL</span>
                </div>
                <div class="skill-item mx-3 my-2">
                    <i class="fab fa-bootstrap skill-icons bootstrap-icon"></i>
                    <span>Bootstrap</span>
                </div>
                <div class="skill-item mx-3 my-2">
                    <i class="fab fa-git-alt skill-icons git-icon"></i>
                    <span>Git</span>
                </div>
            </div>


            </div>
            <p className="text-center mt-4">Skilled in Data Structures and Algorithms with over 800 problems solved on LeetCode.</p>
            <p className="text-center mt-2">Passionate to Become a Full Stack Web Developer</p>
        </section>
        </>
    )

}