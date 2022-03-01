import portrait from "../../assets/images/AMB.jpg";

function About () {
    return (
        <div className="container-about">
               <h1 className="about-header">About Me</h1>
            <div className="about">
            <img 
            alt="the developer at the grand canyon" 
            src={portrait} className="portrait"
            ></img>
            <p className="about-text">Hi! My name is Ashton Brugh and this is my portfolio using React. 
            I am currently enrolled in the UNC Chapel Hill Coding and Web Programming Boot Camp where I discovered
            my passion for front end development. On a personal note, I live in Raleigh, North Carolina. I enjoy
            live music, being outdoors, travelling, reading, and spending time with my family.</p>
        </div>
        </div>
       
    )
}

export default About