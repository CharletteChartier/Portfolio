import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
     
      emailjs.sendForm('service_zpi3xal', 'contact_form',form.current, '8AzbETtUARkCelUb7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    return (
        <>
      
      <form className='form-wrapper' ref={form} onSubmit={sendEmail}>
        <h1 className='form-title'>Contact Me</h1>
        <div className='form-group'>
        <label id='name-label'className='label'>
          Name
          </label>
        <input id='name-input'className='input' type="text" name="user_name" required />
        <label id='email-label' className='label'>
          Email
          </label>
        <input id='email-input' className='input' type="email" name="user_email" required />
        <label id='subject-label' className='label'>
          Subject
          </label>
          <input id='subject-input' className='input' type="text" name="subject" required />
        <label id='message-label' className='label'>
          Message
          </label>
        <textarea id='message-input' className='input' name="message" />
        <input className='submit-button' type="submit" value="Send" required />
        </div>
      </form>
      
     
      </>
    );
  };

export default Contact;