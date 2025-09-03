import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import ise from "../../assets/ise.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
  <div id="projects-experience">

  {/* Internship & Work Experience Section */}
  <h1 id="para">INTERNSHIP</h1>
  <div className="slider">
    <Card 
      title="Data Analyst Intern" 
      description="BIOCARE KMK Limited | Data Analyst & Scientist | May 2025 - July 2025 (2 Months)" 
    />
   
  </div>

  {/* Projects Section */}
  <h1 id="para"> PROJECTS</h1>
  <div className="slider">
    <Card 
      title="ONE CART" 
      githubLink="https://github.com/yourusername/one-cart" 
      deployedLink="https://one-cart.example.com" 
    />
    <Card 
      title="Airbnb" 
      githubLink="https://github.com/yourusername/airbnb-clone" 
      deployedLink="https://airbnb.example.com" 
    />
    <Card 
      title="COMPANY CHATBOT (RAG)" 
      githubLink="https://github.com/yourusername/company-chatbot" 
      deployedLink="https://company-chatbot.example.com" 
    />
    <Card 
      title="RECOMMENDATION SYSTEM" 
      githubLink="https://github.com/yourusername/recommendation-system" 
      deployedLink="https://recommendation-system.example.com" 
    />
    <Card 
      title="IPL 2008-2025 DASHBOARD ANALYSIS & PREDICTION" 
      githubLink="https://github.com/yourusername/ipl-dashboard" 
      deployedLink="https://ipl-dashboard.example.com" 
    />
    <Card 
      title="LOAN ANALYSIS & PREDICTION" 
      githubLink="https://github.com/yourusername/loan-analysis" 
      deployedLink="https://loan-analysis.example.com" 
    />
    <Card 
      title="PIZZA SALES ANALYSIS OF LOCAL OUTLET" 
      githubLink="https://github.com/yourusername/pizza-sales" 
      deployedLink="https://pizza-sales.example.com" 
    />
  </div>

</div>

);

}

export default Projects
