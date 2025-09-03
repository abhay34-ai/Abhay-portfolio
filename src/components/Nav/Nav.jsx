import React, { useRef } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import LinkedIn and Email icons

function Nav() {
  let menu = useRef();
  let mobile = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0
    });
    tl.from("nav ul.desktopmenu li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1
    });
    tl.from(".midnav a", {
      y: -50,
      duration: 1,
      opacity: 0,
      stagger: 0.3
    });
  });

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className='desktopmenu'>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
        <Link to="projects-experience" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
      </ul>

      {/* Middle Navbar with Icons */}
      <div className="midnav">
      <a href="https://www.linkedin.com/in/abhay-thakre-a402b1370/" target="_blank" rel="noopener noreferrer" className='linkidin'>
       <FaLinkedin size={40} />
      </a>
     <a href="mailto:thakreabhay450@gmail.com" className='email'>
      <FaEnvelope size={40} />
      </a>
     </div>


      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" ref={menu} onClick={() => {
        mobile.current.classList.toggle("activemobile");
        menu.current.classList.toggle("activeham");
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
        <Link to="projects-experience" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav;
