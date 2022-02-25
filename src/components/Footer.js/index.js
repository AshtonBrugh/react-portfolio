import gitlogo from '../../assets/images/github1.png';
import linkedlogo from '../../assets/images/linkedin.jpg';
import stacklogo from '../../assets/images/stackoverflow.png';

function Footer() {

    return(
        <div className="footer-container">
        <h1 className="footer">[This is an Ashton Brugh application]</h1>
        <a href="https://github.com/ashtonbrugh" target="_blank" rel='noreferrer'>
        <img 
            src= {gitlogo}
            alt="github logo"
            className="logo" />
        </a>

        <a href="https://linkedin.com/in/ashtonbrugh" target="_blank" rel='noreferrer'>
        <img 
            src= {linkedlogo}
            alt="linkedin logo"
            className="logo" />
        </a>

        <a href="https://stackoverflow.com/users/18311625/ashton" target="_blank" rel='noreferrer'>
        <img 
            src= {stacklogo}
            alt="stackoverflow logo"
            className="logo" />
        </a>

        </div>
    )
}

export default Footer