import React from 'react'
import { useState } from "react"
import "./Contact.css"
function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        setSubmitted(true); // Show the message
    };
    return (
        <div className="container">
            {submitted ? (
                <h1 className="thank-you">Thanks for your feedback!</h1>
            ) : (
                <div className="contact">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Your Name" name="username" required />
                        <input type="email" placeholder="Enter Your Email" name="email" required />
                        <textarea name="message" placeholder="Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Contact