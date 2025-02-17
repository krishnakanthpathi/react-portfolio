import "../src/assets/css/style.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route , Routes } from "react-router-dom"

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        document.body.classList.toggle("bg-dark", darkMode);
        document.body.classList.toggle("text-light", darkMode);
        console.log(darkMode ? "Dark mode activated" : "Light mode activated");
    }, [darkMode]);

    return (
        <>
            <Navbar darkmode={toggleDarkMode} theme={darkMode} />
            {/* <Hero theme={darkMode} />
            <About theme={darkMode} />
            <Skills theme={darkMode} />
            <Projects theme={darkMode} />
            <Achievements theme={darkMode} />
            <Footer /> */}

            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={ <> <About /> <Skills/> </>} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects theme={darkMode} />} />
                <Route path="/achievements" element={<Achievements />} />
            </Routes>
            
            <Footer />
        </>
    );
}

export default App;
