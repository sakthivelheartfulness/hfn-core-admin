import logo from './logo.svg';
import './App.css';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button backgroundColor="red" primary="true"  size="medium" label="Basic Button"/>
      </header>
    </div>
  );
}

export default App;
