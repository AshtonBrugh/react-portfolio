import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';
import '../../../src/App.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [blurNameMessage, setBlurNameMessage] = useState('');
    const [blurEmailMessage, setBlurEmailMessage] = useState('');
    const [blurMessage, setBlurMessage] = useState('');
  
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleBlurName= (e) => {
        e.preventDefault();
        setBlurNameMessage(`A name is required!`)
        
    };

    const handleBlurEmail= (e) => {
        e.preventDefault();
        setBlurEmailMessage(`An email is required!`)
        
    };

    const handleBlurMessage= (e) => {
        e.preventDefault();
        setBlurMessage(`A message is required!`)
        
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Your email is invalid!');
            return;
        };
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
    
        <div className="container-contact">
            <form className = "form">
            <h1 className="contact-header">Contact Me </h1>
                <p className="input-label">Name: </p>
                <input className="input-form"
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleBlurName}
                type="name"
                placeholder="name"
            />
               {blurNameMessage && (
                    <div>
                        <p className="error-text">{blurNameMessage}</p>
                    </div>
                )}
                
                <p className="input-label">Email:</p>
                <input className="input-form"
                value={email}
                name="email"
                onBlur={handleBlurEmail}
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />

                {blurEmailMessage && (
                    <div>
                        <p className="error-text">{blurEmailMessage}</p>
                    </div>
                )}  

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                 
                <p className="input-label">Send me a message!</p>
                <textarea className="input-form"
                value={message}
                name="message"
                onBlur={handleBlurMessage}
                onChange={handleInputChange}
                type="message"
                placeholder="message"
            />

                {blurMessage && (
                    <div>
                        <p className="error-text">{blurMessage}</p>
                    </div>
                )}  
             
            <button className="btn" type="button" onClick={handleFormSubmit}>
                Submit
            </button>
            </form>
        </div>
        
    );
};

export default Contact;