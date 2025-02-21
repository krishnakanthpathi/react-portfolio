import { motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';

export default function About() {
    const url = "https://portfolio-backend-bs6x.onrender.com/about";
    
    const [Aboutdata, setAbout] = useState("Hi there! I'm a Full Stack Web Developer");
    const [loader , setloader] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            setAbout(data.pop());
            setloader(false);
            console.log(data)
        };
        getData();
    }, []);


    const spinner = "spinner-border text-warning " + (loader ? "" : "d-none");

    return(
        <>
        <section id="about" className="container text-center pt-5">
            <h2 className="section-title">About Me</h2>
            <p className="lead text-center mt-4">
                {Aboutdata.description}
            </p>
            <div class= { spinner } role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p className="text-center">Passionate to Become Full Stack Web Developer</p>
        </section>
        </>
    )
}