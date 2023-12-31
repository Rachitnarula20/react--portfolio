import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-r(4).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faEye, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
const Sidebar = () => {
    const [showNav ,setShowNav] = useState(false);

    return(
    <div className='nav-bar'>
        <Link className= 'logo' to = '/'>
        <img src={LogoS} alt='logo' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink
            onClick={() => setShowNav(false)}
            exact= 'true' activeclassname = 'active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink 
            onClick={() => setShowNav(false)}
            exact= 'true' activeclassname = 'active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink 
            onClick={() => setShowNav(false)}
            exact= 'true' activeclassname = 'active' className='skills-link' to='/skills'>
                <FontAwesomeIcon icon={faGear} color='#4d4d4e' />
                </NavLink>

                <NavLink 
                onClick={() => setShowNav(false)}
                exact= 'true' activeclassname = 'active' className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                </NavLink>
            <NavLink 
            onClick={() => setShowNav(false)} 
            exact= 'true' activeclassname = 'active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}

            color='#e48360'
            size='3x'
            className='close-icon'
            />
        </nav >
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rachit-narula-3146a9257/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Rachitnarula20'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/rachit.narula/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
        onClick={ () => setShowNav(true)}
        icon={faBars}
        color='#e48360' 
        size='3x'
        className='hamburger-icon' />
    </div>
) 
}

export default Sidebar; 