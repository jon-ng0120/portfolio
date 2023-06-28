import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import PersonalSummary from './components/PersonalSummary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <PersonalSummary />
        <AboutMe />
        <Skills />
        <Projects />
      </Main>
    </div>
  );
}

export default App;
