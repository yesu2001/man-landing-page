import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { ImHome } from 'react-icons/im';
import About from './pages/about/About';
import Investors from './pages/investors/Investors';
import Letters from './pages/investors/Letters';
import Principles from './pages/investors/Principles';
import Media from './pages/media/Media';
import Contact from './pages/contact/Contact';
import Home from './pages/home1/Home';
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
  const [news,setNews] = React.useState('');
  const [sub,setSub] = React.useState('');
  const [celcius,setCelcius] = React.useState('');
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '49158bdb36mshaea5d5d7f6e909cp149c6ejsnb6b8ae2761a9',
        'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
      }
    };
  
    fetch('https://climate-news-feed.p.rapidapi.com/page/1?limit=10', options)
    .then(response => response.json())
    .then(response => {
      for(var i = 0; i< response.articles.length; i++){
        // document.getElementById('news').innerHTML = response.articles[i].title;
        setNews(response.articles[i].title);
        // document.getElementById('sub').innerHTML ='Source:&nbsp;'+ response.articles[i].source;
        setSub(response.articles[i].source);
      }
    })
    .catch(err => console.error(err));

    const option = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '49158bdb36mshaea5d5d7f6e909cp149c6ejsnb6b8ae2761a9',
        'X-RapidAPI-Host': 'daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com'
      }
    };
    
    fetch('https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api', option)
      .then(response => response.json())
      .then(response => {
        for(var i = 0; i< response.co2.length; i++){
        console.log(response.co2[i].cycle);
        // document.getElementById('cycle').innerHTML = response.co2[i].cycle;
        setCelcius(response.co2[i].cycle);
        }
      })
      .catch(err => console.error(err));
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home celcius={celcius} news={news} sub={sub}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/investors" element={<Investors/>}/>
          <Route path="/investors/principles" element={<Principles/>}/>
          <Route path="/investors/letters" element={<Letters/>}/>
          <Route path="/contact" element={<Contact/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/legal" element={<Legal/>}/>
          <Route path="/ourprojects" element={<OurProjects/>}/>
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
