import "../src/assets/css/style.css"
import { useState , useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"

function App() {

    const [ Dark , setDark ] = useState(false) 

    const toggleDark = () => {
        setDark(!Dark)
    }
    useEffect(() =>{
        if(Dark){
          console.log('dark')
            document.body.classList.add('bg-dark')
            document.body.classList.add('text-light')
        }else{
          console.log('light')
            document.body.classList.remove('text-light')
            document.body.classList.remove('bg-dark') 
        }
    } , [Dark])
    
    return (
    <>
      <Navbar darkmode={toggleDark} theme = {Dark} />
      <Hero theme = {Dark}/>
      <About theme = {Dark} />
      <Skills theme = {Dark} />
      <Projects theme = {Dark} />
      <Achievements theme = {Dark} />  
      
    </>
    )
  
}
export default App
