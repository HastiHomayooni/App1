import './App.css';
import Start from '../src/Start';
import SignUp from '../src/SignUp';
import Login from '../src/Login';
import Profile from '../src/Profile';
import Specification from '../src/Specification';
import FriendProfile from '../src/FriendProfile';
import Map from '../src/Map';
import Account from '../src/Account'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {useState} from 'react';

function App() {
  const [OtherLocation,setOtherLocation] =useState([[36.58, 53.06],[36.556, 53.06],])
  const [posts,setPosts] =useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Start/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Profile' element={<Profile/>}/>
          <Route path='Specification' element={<Specification/>}/>
          <Route path='Map' element={<Map OtherLocation={OtherLocation}/>}/>
          <Route path='Account' element={<Account/>}/>
          <Route path='FriendProfile' element={<FriendProfile posts={posts}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
