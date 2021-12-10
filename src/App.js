import React, { useEffect } from 'react';
//Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Firebase Authentication
import { auth } from './firebase';
//Redux Setup
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
//Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
//Styling
import './App.css';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        //log out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <>
            <LoginScreen />
            <Info />
            <Footer />
          </>
        ) : (
          <Routes>
            <Route
              path="/profile"
              element={
                <>
                  <ProfileScreen />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/"
              element={
                <>
                  <HomeScreen />
                  <Footer />
                </>
              }
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
