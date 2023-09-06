import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'

function App() {
  return (
    <div>

      <BrowserRouter>
        <main className="py-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sighup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
