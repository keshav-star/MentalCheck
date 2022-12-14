import './App.css';
import React, { useState, useEffect } from 'react';
import { CometChatUI } from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components'
import { CometChat } from '@cometchat-pro/chat';
import Welcome from './components/Welcome'
import { HashRouter, Routes, Route } from "react-router-dom";
import Quiz from './components/Quiz';
import Menu from './components/Menu';
import Appointment from './components/Appointment';
import About from './about/About';
import Usefullinks from './components/Usefullinks';
import Details from './Details';

const appID = "227478879db72d63";
const region = process.env.PSYCHO_REGION;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

const authKey = process.env.PSYCHO_AUTH_KEY;
var uid = "user1";
// var name = "Kevin";

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )

// const uid = "SUPERHERO1";

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });
  },
  error => {
    console.log("Login failed with exception:", { error });
  }
);

function App() {
  return (
    <HashRouter>
      <Menu  />
      <div className="sect">
        <div className="left">
          <Usefullinks />
        </div>
        <div className='right '>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/details" element={<Details />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<div style={{ backgroundColor: "white", width: '800px', height: '800px' }}>
              <CometChatUI />
            </div>} />
          </Routes>

        </div>
      </div>
    </HashRouter>
  );
}

export default App;
