import React, { ReactElement } from 'react';

import './App.css';
import { ProgressBar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import { AboutMe } from '../feachers/aboutMe/AboutMe';
import Header from '../feachers/header/Header';
import { Posts } from '../feachers/posts/Posts';
import { User } from '../feachers/user/User';
import { useAppSelector } from '../store/store';

const App = (): ReactElement => {
  const { status } = useAppSelector(state => state.post);
  //55j
  return (
    <div className="App">
      <Header />
      {status === 'loading' && <ProgressBar animated={true} now={100} />}
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
