const Achievements = () => {
    return (
        <section id="achievements" className="container my-5">
            <h2 className="text-center mb-4">Achievements</h2>
            <div className="row">
                {/* repeated row */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fas fa-trophy" style={{ color: '#ff9800', fontSize: '2rem' }}></i> 1st Prize in Crack the Jumble Code
                            </h5>
                            <p className="card-text">Awarded 1st prize in the "Crack the Jumble Code" competition, showcasing problem-solving skills and creativity.</p>
                            <a href="https://www.linkedin.com/posts/krishna-kanth-166b31252_codebreaker-competitionchallenge-activity-7172067019314384896-VNc2?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Achievement</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
};

export default Achievements;