import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ImageOne from '../../assets/images/image1.jpg'
import ImageTwo from '../../assets/images/image2.jpg'
import ImageThree from '../../assets/images/image4 (2).jpg'

import './projects.scss'

const portfolioData = [
  {
    id: 1,
    name: 'DrumKit',
    image: ImageOne,
    link: 'https://rachitnarula20.github.io/Drum_Kit/',
  },
  {
    id: 2,
    name: 'Shopping Cart',
    image: ImageTwo,
    link: 'https://shopping-cart-mh09.onrender.com',
  },
  {
    id : 3,
    name: 'Portfolio',
    image: ImageThree,
    link: 'https://rachitnarula-portfolio.netlify.app/',

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
      // Clean up the timeout if the component unmounts before it triggers.
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
        
        <div className='projects-container' style={{}}>
            <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div >
                    <p>{item.name}</p>
                    <a href={item.link}><button>Visit</button></a>
                  </div>
                )}
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
