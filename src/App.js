import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { ImHome } from 'react-icons/im';
import About from './pages/about/About';
import Investors from './pages/investors/Investors';
import Letters from './pages/investors/Letters';
import Principles from './pages/investors/Principles';
import Media from './pages/media/Media';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import OurProjects from './pages/ourprojects/OurProjects';
import Management from './pages/management/Management';
import Privacy from './pages/privacy/Privacy';
import Legal from './pages/legal/Legal';
import Careers from './pages/careers/Careers';
import Application from './pages/careers/Application';
import Sustainability from './pages/sustainability/Sustainability'

function App() {
  
  document.title = 'MAN - Home';

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/investors" element={<Investors/>}/>
          <Route path="/investors/principles" element={<Principles/>}/>
          <Route path="/investors/letters" element={<Letters/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/legal" element={<Legal/>}/>
          <Route path="/projects/ourprojects" element={<OurProjects/>}/>
          <Route path="/about/management" element={<Management/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/sustainability" element={<Sustainability/>}/>
          <Route path="/careers/application" element={<Application/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
