import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Posts} from "./components/posts/Posts";
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./components/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/about' element={<AboutMe/>}/>
        </Routes>
    </div>
  );
}

export default App;
