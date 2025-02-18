import { motion } from 'framer-motion';
import Aboutdata from '../data/AboutData';

export default function About() {
    return(
        <>
        <section id="about" className="container text-center pt-5">
            <h2 className="section-title">About Me</h2>
            <p className="lead text-center mt-4">
                {Aboutdata.description}
            </p>
            <p className="text-center">Passionate to Become Full Stack Web Developer</p>
        </section>
        </>
    )
}