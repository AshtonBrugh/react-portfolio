import portrait from "../../assets/images/AMB.jpg";

function About () {
    return (
        <div className="container-about">
               <h1 className="about-header">About Me</h1>
            <img 
            alt="portrait of the writer" 
            src={portrait} className="portrait"
            style={{ width: "40%" }}
            ></img>
        </div>
    )
}

export default About