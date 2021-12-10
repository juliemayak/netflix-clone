import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import { auth } from '../firebase';
//styles
import './SignupScreen.css';

function SignUpScreen({ newEmail }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const [email, setEmail] = useState(newEmail || '');
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <div className="signupScreen__details">
          <div className="signupScreen__detailsCheckbox">
            <input type="checkbox" id="remember-me" />
            <label>Remember me </label>
          </div>
          <span>Need help?</span>
        </div>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="signupScreen__blue">{''} Learn more.</span>
        </p>
      </form>
    </div>
  );
}

export default SignUpScreen;
