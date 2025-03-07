import logo from './logo.svg';
import './App.css';

function App() {

  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      </header>
    </div>
  );
}

export default App;
