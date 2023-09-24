import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-r(4).png'
import './home.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo/logo';


const Home = () => {
    const [letterClass , setLetterClass] = useState('text-animate')  

    const nameArray = [' ','R','a','c','h','i','t',',']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
          // Clean up the timeout if the component unmounts before it triggers.
          clearTimeout(timeoutId);
        };
      }, []);

return(
    <>
    <div className="container home-page">
    <div className="text-zone">

        <h1>
           <span className={letterClass}>H</span> 
           <span className={`${letterClass} _12`}>i,</span> 
            <br /> 
           <span className={`${letterClass} _13`}>I</span> 
           <span className={`${letterClass} _14`}>'m</span> 
        {/* <img src={LogoTitle} alt="developer" /> */}
       <AnimatedLetters letterClass={letterClass}
       strArray={nameArray}
       idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
        </h1>
        <h2>Frontend Developer | Javascript Expert | FreeLancer </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    </>
)
}
export default Home