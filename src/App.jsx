
import Layout from './components/Layout/layout';
import './App.scss';
import { Routes,Route} from 'react-router-dom';
import Home from './components/Home/home'
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/projects' element={<Projects/>} />
      </Route>
    </Routes>
   </>
    
  )
}

export default App;
