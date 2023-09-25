import { useEffect, useState } from "react";
import './skills.scss'
import AnimatedLetters from "../AnimatedLetters";
import Cube from "./Cube/cube";

const Skills = () => {
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
        <div className="container skills-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l','s' ]}
                idx={15}
              />
            </h1>
            <p>
            Expert in front-end development including technologies like <span  className="tech-tag">HTML5</span>, <span className="tech-tag">CSS3</span>,<span className="tech-tag">JavaScript</span>, <span className="tech-tag">jQuery</span>,<span className="tech-tag">Git</span>, <span className="tech-tag">GitHub</span>,<span className="tech-tag">Bootstrap</span>,<span className="tech-tag">Sass</span> , <span className="tech-tag">Emailjs</span> etc.
            </p>
            <p align="LEFT">
            I'm not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion. I guarantee a commitment during work on your project.
            </p>
          </div> 
          <Cube /> 
        </div>
        </>
)
}
export default Skills