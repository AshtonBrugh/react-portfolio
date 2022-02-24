import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';
import '../../../src/App.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Email is invalid!');
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
        alert(`Thanks ${name}! `)
    };

    return (
        <div className="container">
            <form className = "form">
                <p className="input-label">Name: </p>
                <input className="input-form"
                value={name}
                name="name"
                onChange={handleInputChange}
                type="name"
                placeholder="name"
            />
                <p className="input-label">Email:</p>
                <input className="input-form"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
                <p className="input-label">Send me a message!</p>
                <textarea className="input-form"
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="message"
            />

            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        
    );
};

export default Contact;