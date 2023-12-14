import Clicker from './Clicker';
import './App.css';
import Form from './Forms';

function App() {
  return (
    <div className="App">
      <Clicker message="HI!!!" buttonText="Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" />
      <Form />
    </div>
  );
}

export default App;
