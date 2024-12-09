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
            Proficient in frontend development using <span className="tech-tag">HTML5</span>, <span className="tech-tag">CSS3</span>, <span className="tech-tag">JavaScript</span>, <span className="tech-tag">React</span>, <span className="tech-tag">Redux</span>, <span className="tech-tag">jQuery</span>, <span className="tech-tag">Bootstrap</span>, and <span className="tech-tag">Tailwind CSS</span>. 
            </p>
            <p align="LEFT">
            Experienced in creating responsive and mobile-first designs, optimizing performance, and delivering user-friendly interfaces. 
            </p>
          </div> 
          <Cube /> 
        </div>
        </>
    )
}
export default Skills;
