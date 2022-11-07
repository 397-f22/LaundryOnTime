import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import Machine from "./components/Machine";
import { useDbData } from "./utilities/firebase";
import Login from "./components/Login";
import { useState } from 'react';
import Toaster from './components/Toast';
function App() {
  const [machines, error] = useDbData("/");
  const [showToast, setShowToast] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  if (machines === undefined) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading data</h1>;
  console.log(machines);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestRoute element={Login} />} />
          <Route
            path="/home"
            element={user ? <Machine machines={machines} setShowToast={setShowToast} /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function GuestRoute({ element: Element, ...rest }) {
  const auth = getAuth();
  const user = auth.currentUser;
  return user ? <Navigate to="/home" /> : <Element />;
}
function PrivateRoute({ element: Element, ...rest }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const [machines, error] = useDbData("/");
  return !user ? <Navigate to="/" /> : <Element />;
}
export default App;
