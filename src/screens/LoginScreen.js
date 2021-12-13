import React, { useState, useEffect } from 'react';

//screens
import SignupScreen from './SignupScreen';

//Styles
import './LoginScreen.css';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div className="loginScreen">
      <div className={`loginScreen__nav ${show && 'loginScreen__nav--black'}`}>
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix-logo"
        />
        {!signIn && (
          <button className="loginScreen__button" onClick={() => setSignIn(true)}>
            Sign In
          </button>
        )}
      </div>
      <div className="loginScreen__background">
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen newEmail={newEmail} />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen__input">
              <form action="">
                <input
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setNewEmail(e.target.value)}
                  value={newEmail}
                />
                <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
