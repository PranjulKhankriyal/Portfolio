import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Education from './components/Education';
import Skills from './components/Skills';
import Socialmedia from './components/Socialmedia';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='Portfolio/' element={<Home/>}/>
        <Route path='Portfolio/about' element={<About/>}/>
        <Route path='Portfolio/project' element={<Project/>}/>
        <Route path='Portfolio/education' element={<Education/>}/>
        <Route path='Portfolio/education' element={<Education/>}/>
        <Route path='Portfolio/skills' element={<Skills/>}/>
      </Routes>
      <Socialmedia/>
      <Footer/>
    </div>
  );
}

export default App;
