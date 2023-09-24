import './contact.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react';
const contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          // Clean up the timeout if the component unmounts before it triggers.
          clearTimeout(timeoutId);
        };
      }, []);

      const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm (
           'service_5xttzhg',
           'template_3f7v24f',
           refForm.current,
           'wgSshl5KFnM3pcoow'
        )
          .then(
           () => {
               alert('Message Successfully sent!')
               window.location.reload(false)
           },
           () =>{
               alert('Failed, Try Again')
           }
          )
   }
      return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                 <AnimatedLetters 
                 letterClass={letterClass}
                 strArray={['C','o','n','t','a','c','t',' ','m','e']}
                 idx={15} /> 
                </h1>
                <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
            </div>

        </div>
        </>
      )
}

export default contact