import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import PersonalSummary from './components/PersonalSummary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <PersonalSummary />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
