import React, { useState, useContext, useRef,useEffect } from 'react';
import { FirebaseContext } from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom'



function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext);

  const inputElement = useRef(null);

  useEffect(()=>{
    inputElement.current.focus();
  },[])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navigate("/");
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            name="email"
            ref={inputElement}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="username"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a onClick={() => navigate("/sighup")}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
