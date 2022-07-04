import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import PersonalSummary from './components/PersonalSummary';

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
