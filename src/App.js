import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Machine from './components/Machine';
import { useDbData } from './utilities/firebase';

function App() {
  const [machines, error] = useDbData('/');

  if (machines == undefined) return <h1>Loading...</h1>
  if (error) return <h1>Error loading data</h1>

  return (
    <div className="App">
      <div>{machines["washer1"].startTime}</div>
      <Machine/>
    </div>
  );
}

export default App;
