import "../src/assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import { Route , Routes } from "react-router-dom"
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import Ai from "./config/ai";

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
                <Route path="/about" element={ 
                    
                    <motion.div 
                        initial={{
                            clipPath: 'inset(0% 0% 100% 0%)', // Text is hidden, clipped from the bottom
                            opacity: 0, // Initially invisible
                        }}
                        animate={{
                            clipPath: 'inset(0% 0% 0% 0%)', // Gradually reveal the text from top to bottom
                            opacity: 1, // Fade in text as it reveals
                        }}
                        transition={{ duration: 1 }} // Adjust duration to control speed

                    > <About /> <Skills/> </motion.div>
                
                
                } />
                
                <Route path="/ai" element={ <Ai />} />
                <Route path="/skills" element={ <Skills />} />
                <Route path="/projects" element={<Projects theme={darkMode} />} />
                <Route path="/achievements" element={<Achievements theme = {darkMode}/>} />
            </Routes>
            
            <Footer />
        </>
    );
}

export default App;
