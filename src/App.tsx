import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Posts} from "./components/posts/Posts";
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./components/aboutMe/AboutMe";
import User from "./components/user/User";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
    </div>
  );
}

export default App;
