import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Firebase';

const LoginPage = () => {

 const history = useHistory();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const signIn = (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
  })
  .catch((error) => {
    console.log(error);
  });
 };

 const register = (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential)
    if (userCredential) {
      history.push('/')
    }
  })
  .catch((error) => {
    console.log(error);
  });
 };


  return (
    <div className="logins">
      <div className="login-title">
        <Link to="/">
          <h1 className="login-Text">AudioZone</h1>
        </Link>
      </div>

      <div className="login-container mt-16">
         <h1 className="text-2xl font-semibold">Sign-in</h1>

         <form>
            {/* <label htmlFor="E-mail">E-mail</label> */}
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            {/* <label htmlFor="password">Password</label> */}
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button className="signInButton" type="submit" onClick={signIn}>Sign In</button>
         </form>

        <p>
           Sign-In to your account to get access to other features available and remember to scroll through our latest devices.
        </p>

        <button onClick={register} className="registerButton">Create New Account</button>

      </div>
    </div>
  );
};

export default LoginPage;

      
   hhh