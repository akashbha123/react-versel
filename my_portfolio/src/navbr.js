import '../src/custom'
import {useState} from 'react'

const Navbr=()=>{
	const [navtrue,setNavtrue]=useState(false);

  const toggleHandler=()=>{
    setNavtrue(!navtrue);
  }

    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Ndjd</a>
    <button onClick={toggleHandler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={navtrue?"true":"false"} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse text-center  justify-content-center justify-content-md-end ${ navtrue?"show":"collapsed"}`} id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item" onClick={toggleHandler}>
          <a className="nav-link active home-section" aria-current="page" href="#home-section">Home</a>
        </li>
        <li className="nav-item" onClick={toggleHandler}>
          <a className="nav-link about-section" href="#about-section">About</a>
        </li>
        <li className="nav-item" onClick={toggleHandler}>
          <a className="nav-link resume-section" href="#resume-section">Resume</a>
        </li>
		<li className="nav-item" onClick={toggleHandler}>
          <a className="nav-link skills-section" href="#skills-section">My Skills</a>
        </li>
        <li className="nav-item" onClick={toggleHandler}>
          <a className="nav-link contact-section" href="#contact-section">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	  
        </>
    );
}

export default Navbr;