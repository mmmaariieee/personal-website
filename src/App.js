import './App.css';
import PersonalInfo from './PersonalInfo';
import TechnicalSkills from './TechnicalSkills';
import TechnicalProjects from './TechnicalProjects';
import Education from './Education';
import Experience from './Experience';
import Languages from './Languages';

function App() {
  return (
    <div className="App">
      <h1>Mariia Honcharenko's Resume</h1>
      <PersonalInfo />
      <TechnicalSkills />
      <TechnicalProjects />
      <Education />
      <Experience />
      <Languages />
    </div>
  );
}

export default App;
