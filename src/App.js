
import './App.css';
import Profile from './com/profile';
import Skills from './com/profile/Skills';

function App() {

 
  return (
    <div className="App">
      <Profile />
      <Skills skillA="php" skillB="java"skillC="HTML"/>
    </div>
  );
}

export default App;
