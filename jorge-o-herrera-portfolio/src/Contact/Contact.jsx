import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);
    emailjs
      .sendForm(
        "service_68ll6tk",
        "template_l2ozyi9",
        form.current,
        "user_xJlHgHnMhR8GaFwERGO1S"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent! I will check my email and get back to you in the next 48 hours!")
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="container">
        <div id="contact-left">
          <header className='contact-me'>Contact me</header>
        </div>
        <form className='contact-form' ref={form} onSubmit={sendEmail} onChange={() => setSent(false)}>
          <input
            className='name-input'
            type="text"
            placeholder="Your name"
            name="user_name"
            required
          />
          <input className='email-input' type="email" placeholder="Email" name="user_email" required />
          <textarea className='message-input' name="message" placeholder="Message" rows="6" required />
          <input
            type="submit"
            value={sent ? "Sent" : "Submit"}
            className="contact-form-submit"
            id={sent ? "sent" : "not-sent"}
          />
        </form>
      </div>
    </div>
  );
}
