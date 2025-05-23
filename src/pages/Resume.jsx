import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './css/Resume.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaExternalLinkAlt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
    useEffect(() => {
        const sidebar = document.getElementById("mobileSidebar");
        const hamburger = document.getElementById("hamburgerButton");

        const hideHamburger = () => hamburger.style.display = "none";
        const showHamburger = () => hamburger.style.display = "block";

        sidebar.addEventListener("show.bs.offcanvas", hideHamburger);
        sidebar.addEventListener("hidden.bs.offcanvas", showHamburger);

        return () => {
            sidebar.removeEventListener("show.bs.offcanvas", hideHamburger);
            sidebar.removeEventListener("hidden.bs.offcanvas", showHamburger);
        };
    }, []);
    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        const offcanvasEl = document.getElementById("mobileSidebar");
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

        if (bsOffcanvas) {
            bsOffcanvas.hide();

            // Wait for Bootstrap animation to finish before scrolling and cleaning up
            setTimeout(() => {
            // Manually remove backdrop
            const backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) backdrop.remove();

            // Re-enable body scroll
            document.body.classList.remove('offcanvas-backdrop');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';

            // Smooth scroll to section
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
            }, 350); // Match Bootstrap's offcanvas transition time
        }
    };


  return (
    <>
        {/* Hamburger toggle button (mobile only) */}
        <button
        id="hamburgerButton"
        className="btn btn-success hamburger-button d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
        >
            ☰
        </button>
        <div className="offcanvas offcanvas-start bg-success text-white " tabIndex="-1" id="mobileSidebar">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Alexandria</h5>
                <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column gap-3">
                <a href="#intro" className="nav-link text-white" onClick={(e) => handleNavClick(e, "#intro")}>Intro</a>
                <a href="#summary" className="nav-link text-white" onClick={(e) => handleNavClick(e, "#summary")}>Summary</a>
                <a href="#skills" className="nav-link text-white" onClick={(e) => handleNavClick(e, "#skills")}>Skills</a>
                <a href="#education" className="nav-link text-white" onClick={(e) => handleNavClick(e, "#education")}>Education</a>
                <a href="#projects" className="nav-link text-white" onClick={(e) => handleNavClick(e, "#projects")}>Projects</a>
                <a href="#experience" className="nav-link text-white" onClick={(e) => handleNavClick(e, "#experience")}>Experience</a>
            </div>
        </div>
        {/* Desktop Sidebar Only */}
        <div className="sidebar d-none d-lg-flex flex-column">
        <h4>Alexandria</h4>
        <nav className="nav flex-column gap-2 mt-4">
            <a href="#intro" className="nav-link text-white">Intro</a>
            <a href="#summary" className="nav-link text-white">Summary</a>
            <a href="#skills" className="nav-link text-white">Skills</a>
            <a href="#education" className="nav-link text-white">Education</a>
            <a href="#projects" className="nav-link text-white">Projects</a>
            <a href="#experience" className="nav-link text-white">Experience</a>
        </nav>
        </div>

        <div className="content">
            {/* Home Section - Split Layout */}
            <section className="bg-light py-4">
            <div className="container">
                <div className="card shadow-lg border-0" id="intro">
                <div className="row g-0 flex-column flex-md-row">
                    {/* Left Panel */}
                    <div className="blurb-info col-12 col-md-4 bg-white p-4 border-md-end text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
                        {/* <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-circle img-fluid border border-success mb-3" /> */}
                        <h5 className="fw-bold text-start">Alexandria McOmber</h5>
                        <p className="mb-1 text-muted text-start">
                            <FaMapMarkerAlt className="me-2" style={{ color: "#198754" }}/>Cottonwood Heights, UT</p>
                        <a href="tel:8012302205" className="mb-1 text-muted text-start d-block text-decoration-none">
                            <FaPhone className="me-2" style={{ color: "#198754" }}/>801-230-2205</a>
                        <a href="mailto:alex.mcomber11@gmail.com" className="mb-1 text-muted text-start d-block text-decoration-none">
                            <FaEnvelope className="me-2" style={{ color: "#198754" }}/>alex.mcomber11@gmail.com</a>
                        <a href="https://github.com/Alex-Mco" className="mb-1 text-muted text-start d-flex align-items-center text-decoration-none" target="_blank" zrel="noopener noreferrer" title="GitHub">
                            <FaGithub className="me-2" style={{ color: "#333" }}/>
                            <span>Alex-mco</span>
                        </a>
                        <a href="http://www.linkedin.com/in/alexandria-mcomber-03804a241" className="mb-1 text-muted text-start d-flex align-items-center text-decoration-none" target="_blank" zrel="noopener noreferrer" title="LinkedIn">
                            <FaLinkedin className="me-2" style={{ color: "#0077B5" }}/>
                            <span>Alexandria McOmber</span>
                        </a>
                        <a href="https://marvel-nexus.vercel.app" className="mb-1 text-muted text-start d-flex align-items-center text-decoration-none" target="_blank" zrel="noopener noreferrer" title="Marvel Nexus">
                            <img src="/favicon.ico" alt="Marvel Nexus" style={{ width: '0.9em', height: '0.9em' }} className="me-2" />
                            <span>Marvel Nexus</span>
                        </a>
                        <br></br>
                        <div className="text-start">
                            <a className="btn btn-outline-success" href="/Alexandria_McOmber_Resume.pdf" download>
                                Download Resume
                            </a>
                        </div>
                    </div>
                    {/* Right Panel */}
                    <div id="personal-summary" className="col-12 col-md-8 p-4 d-none d-md-block">
                        <h1 className="display-6 fw-bold">Welcome, thanks for visiting!</h1>
                        <blockquote className="blockquote text-starttext-muted my-3">
                            <p className="mb-0">
                            I am a freshly graduated Full Stack Web Developer and eager to start my career. 
                            I'm a curious and creative developer who loves building intuitive, and human-centered web expereinces.
                            I thrive on solving real problems through clean designs and thoughtful engineering to bring the best expereince possible to my clients.
                            Outside of work I enjoy making art in my free time, and learning new tech to keep up with the ever changing industry.
                            </p>
                        </blockquote>

                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Main Content */}
            <main className="container text-gray">
            <div className="card p-4 mb-4 shadow-lg border-0" id="summary">
                <h2 className="h4 text-success mb-3 border-bottom pb-2">Professional Summary</h2>
                <p>
                Full Stack Web Developer with hands-on experience in React, C#, JavaScript, and Python,
                with some experience working with AWS cloud services. Skilled in building responsive
                applications, maintaining interactive systems, and working across both software and hardware
                domains. Known for adaptability, collaborative problem-solving, and a passion for delivering
                high-quality user experiences.
                </p>
            </div>

            <div className="card p-4 mb-4 shadow-lg border-0" id="skills">
                <h2 className="h4 text-success mb-4 border-bottom pb-2">Skills</h2>
                <ul className="list-group list-group-flush">
                <li className="list-group-item ps-0"><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                <li className="list-group-item ps-0"><strong>Backend:</strong> C#, .NET Core, Python</li>
                <li className="list-group-item ps-0"><strong>Databases:</strong> MongoDB Atlas</li>
                <li className="list-group-item ps-0"><strong>Tools:</strong> Figma, Photoshop, VS Code, Arduino, Git</li>
                <li className="list-group-item ps-0"><strong>Cloud:</strong> AWS (S3, EC2)</li>
                <li className="list-group-item ps-0"><strong>Soft Skills:</strong> Collaboration, attention to detail, problem-solving, adaptability</li>
                </ul>
            </div>

            <div className="card p-4 mb-4 shadow-lg border-0" id="education">
                <h2 className="h4 text-success mb-3 border-bottom pb-2">Education</h2>
                <p><strong>Utah Valley University</strong> — Bachelor of Computer Science, Full Stack Web Development</p>
                <p className="text-muted">Orem, UT | August 2021 – May 2025</p>
            </div>

            <div className="card p-4 mb-4 shadow-lg border-0" id="projects">
            <h2 className="h4 text-success mb-3 border-bottom pb-2">Key Projects</h2>
            <h5 className="fw-semibold">Capstone Project — Marvel Nexus</h5>
            <p>
                Designed and implemented full-stack architecture using a React frontend styled with CSS and a Node.js/Express backend connected to MongoDB Atlas.
                The application includes REST APIs, authentication, automated tests, and is deployed on AWS S3 and Elastic Beanstalk.
            </p>
            <p>
                <a href="https://marvel-nexus.vercel.app" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-1 mt-2">
                    <img src="/favicon.ico" alt="Marvel Nexus Icon" style={{ width: '1em', height: '1em' }} />
                    Marvel Nexus
                </a>
            </p>
            <h5 className="fw-semibold mt-4">CS3400: Human Factors in Software Development</h5>
            <p>
                Developed a Figma prototype and conducted usability studies focusing on user interface design. 
            </p>
            <p>
                <a href="https://www.figma.com/design/OgHUu9nvk724mWZx1lQqtn/Prototype_QuantumLeapers" target="_blank" rel="noopener noreferrer">Timely Figma Prototype</a>
            </p>
            </div>

            <div className="card p-4 mb-4 shadow-lg border-0" id="experience">
            <h2 className="h4 text-success mb-3 border-bottom pb-2">Experience</h2>
            <h5 className="fw-semibold">Exhibit Technician — Thanksgiving Point</h5>
            <p className="text-muted">Lehi, UT | February 2022 – December 2024</p>
            <p>
                Repaired interactive museum exhibits including touchscreens and control systems. Reduced downtime and improved guest satisfaction by responding quickly to technical issues.
                Collaborated with interdisciplinary teams to design new experiences and programmed microcontroller-based systems for long-term durability.
            </p>
            </div>
            </main>
            <footer className="footer border-top pt-3">
                <p>
                    © 2025 Alexandria McOmber. All rights reserved. Built using React + Vite, bootstrap, & plain css. 
                </p>
            </footer>
        </div>
    </>
  );
}
