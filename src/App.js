import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Machine from './components/Machine';
import { useDbData } from './utilities/firebase';
import { useState } from 'react';
import Toaster from './components/Toast';


function App() {
  const [machines, error] = useDbData('/');
  const [showToast, setShowToast] = useState(false);

  if (machines == undefined) return <h1>Loading...</h1>
  if (error) return <h1>Error loading data</h1>

  return (
    <div>
      <Toaster showToast={showToast} setShowToast={setShowToast} />
      <Machine machines={machines} setShowToast={setShowToast} />
    </div>
  );
}

export default App;
