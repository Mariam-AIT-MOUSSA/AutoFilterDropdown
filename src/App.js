import './App.css';
import SkillsDropdown from './components/skillsDropdown';
import UsersDropdown from './components/usersDropdown';

function App() {

  return (
    <div className="App">
      <h2>Hello in the auto filter  dropdown samples</h2>
      <UsersDropdown></UsersDropdown>
      <SkillsDropdown></SkillsDropdown>
    </div>
  );
}

export default App;
