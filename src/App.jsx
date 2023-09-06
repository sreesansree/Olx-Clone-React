import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'
import './App.css'

function App() {

  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <BrowserRouter>
          <main className="py-1">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sighup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<Create />} />
              <Route path="/view" element={<View />} />
            </Routes>

          </main>
        </BrowserRouter>
      </Post>

    </div>
  );
}

export default App;
