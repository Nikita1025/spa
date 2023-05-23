import React from 'react';
import './App.css';
import Header from "../feachers/header/Header";
import {Posts} from "../feachers/posts/Posts";
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "../feachers/aboutMe/AboutMe";
import {User} from "../feachers/user/User";
import Spinner from "react-bootstrap/Spinner";
import {useAppSelector} from "../store/store";
import {ProgressBar} from "react-bootstrap";

function App() {
    const {status} = useAppSelector(state => state.post)

    return (
    <div className="App">
        <Header/>
        {status === 'loading' && <ProgressBar animated={true} now={100}/>}
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/user/:userId' element={<User/>}/>
        </Routes>
    </div>
  );
}

export default App;
