import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ImageOne from '../../assets/images/image1.jpg'
import ImageTwo from '../../assets/images/image2.jpg'
import ImageThree from '../../assets/images/image4 (2).jpg'

import './projects.scss'

const portfolioData = [
  {
    id: 1,
    name: 'WSI Viewer',
    image: ImageOne,
    link: 'https://wsi-viewer-pink.vercel.app/',
    description:
      'A Whole Slide Image (WSI) Viewer built with React and Tailwind CSS. It features metadata panels, an overview hub, and an interactive zoomable center panel for seamless exploration.'
  },
  {
    id: 2,
    name: 'Owltics',
    image: ImageTwo,
    link: 'https://owltics.com/',
    description:
      'A data-driven analytics platform offering intuitive dashboards, real-time data visualization, and comprehensive tools to track and optimize business performance metrics.'
  },
  {
    id: 3,
    name: 'Portfolio',
    image: ImageThree,
    link: 'https://rachitnarula-portfolio.netlify.app/',
    description:
      'A personal portfolio website showcasing web development skills, projects, and professional achievements, with a modern design and user-friendly interface.'
  }
]

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleHover(index) {
    setHoveredValue(index)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <section className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        
        <div className="projects-container">
          <div className="portfolio__content__cards">
            {portfolioData.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img alt={item.name} src={item.image} />
                  </a>
                </div>
                <div className={`overlay ${index === hoveredValue ? 'visible' : ''}`}>
                  <div className="overlay-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
