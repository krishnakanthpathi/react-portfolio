import React from "react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [resumeurl, setResumeurl] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://portfolio-backend-bs6x.onrender.com/resume',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setResumeurl(data.pop());
            setLoader(false);
        };
        fetchData();
    }, []);
    const spinner = "spinner-border text-warning " + (loader ? "" : "d-none");
    return (
        <>
        <section className="hero my-5">
            <div className="container text-center">
                <i className="fa-solid display-1 fa-face-grin-wink"></i>
                <h1 className="mt-4"><strong>Krishna Kanth Pathi</strong></h1>
                <h2>Data Structures & Algorithms Enthusiast</h2>
                <p className="mt-2">Passionate to Become Full Stack Web Developer</p>
                <div className={spinner} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
               { !loader &&  <a href={resumeurl.url} className="btn btn-primary">Download Resume</a>}
            </div>  
        </section>
        </>
    )

}