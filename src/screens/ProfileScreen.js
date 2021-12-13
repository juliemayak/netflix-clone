import React from 'react';
//Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
//firebase
import { auth } from '../firebase';
//components
import Nav from '../components/Nav';
import PlansScreen from './PlansScreen';
//Styling
import './ProfileScreen.css';
import { useNavigate } from 'react-router';

function ProfileScreen() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="profile-icon"
          />
          <div className="profileScreen__details">
            <h2>{user.email} </h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                className="profileScreen__signOut"
                onClick={() => {
                  auth.signOut();
                  navigate('/');
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
