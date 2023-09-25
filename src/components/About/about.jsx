import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './about.scss'
import Avatar from './Avatar/avatar'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
          // Clean up the timeout if the component unmounts before it triggers.
          clearTimeout(timeoutId);
        };
      }, []);

  
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quiet confident and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one word that would be a 
               tech-obsessed!!!''
            </p>
          </div>  
          <Avatar />
        </div>
        </>
)
}
export default About