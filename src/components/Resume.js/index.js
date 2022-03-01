function Resume() {
    return(
        <div className="resume-container">
            <h1 className="resume-header">Resume</h1>
            <div className="resume-list">
                <ul className="front-end-list"> <u className="underline">Front end</u>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Python</li>
                </ul>
                <ul className="front-end-list"> <u className="underline">Back end</u>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>PWAs</li>
                    <li>NoSQL</li>
                </ul>
            </div>
            <a className="resume-link" href="resume/Resume.pdf" download="Ashton Brugh Resume">Click to download my resume</a>
        </div>
    )
}

export default Resume;