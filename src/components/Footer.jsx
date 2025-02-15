export default function Footer() {
    return (
        <footer className="py-5 text-center">
            <div className="container">
                <p>Connect with me on social media and coding platforms:</p>
                <div className="mb-3">
                    <a 
                        href="https://github.com/krishnakanthpathi" 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#ffffff", backgroundColor: "#333333", borderColor: "#333333", margin: "5px" }}
                    >
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/krishna-kanth-166b31252/" 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#ffffff", backgroundColor: "#0077b5", borderColor: "#0077b5", margin: "5px" }}
                    >
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a 
                        href="https://leetcode.com/u/krishnakanthpathi/" 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#ffffff", backgroundColor: "#FFA116", borderColor: "#FFA116", margin: "5px" }}
                    >
                        <i className="fas fa-code"></i> LeetCode
                    </a>
                    <a 
                        href="https://www.hackerrank.com/profile/22A31A05I7" 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#ffffff", backgroundColor: "#2EC866", borderColor: "#2EC866", margin: "5px" }}
                    >
                        <i className="fab fa-hackerrank"></i> HackerRank
                    </a>
                </div>
            </div>
            <p className="mt-4">© 2024 Krishna Kanth Pathi</p>
        </footer>
    );
}
