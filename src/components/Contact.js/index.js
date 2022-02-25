import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';
import '../../../src/App.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
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

    const handleBlur= (e) => {
        e.preventDefault();
        setBlurMessage(`${e.target.name} is required!`)
        
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

            {blurMessage && (
                    <div>
                        <p className="error-text">{blurMessage}</p>
                    </div>
                )}

                
                <p className="input-label">Name: </p>
                <input className="input-form"
                value={name}
                name="name"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="name"
                placeholder="name"
            />
                
                <p className="input-label">Email:</p>
                <input className="input-form"
                value={email}
                name="email"
                onBlur={handleBlur}
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                 
                <p className="input-label">Send me a message!</p>
                <textarea className="input-form"
                value={message}
                name="message"
                onBlur={handleBlur}
                onChange={handleInputChange}
                type="message"
                placeholder="message"
            />
             
            <button className="btn" type="button" onClick={handleFormSubmit}>
                Submit
            </button>
            </form>
        </div>
        
    );
};

export default Contact;