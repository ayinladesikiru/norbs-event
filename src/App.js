import './App.css';
import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />

              </Routes>
    </div>
  );
}

export default App
