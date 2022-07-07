import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import PersonalSummary from './components/PersonalSummary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <PersonalSummary />
        <AboutMe />
      </Main>
    </div>
  );
}

export default App;
