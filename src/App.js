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
  const [OtherLocation,setOtherLocation] =useState([])
  const [posts,setPosts] =useState([])
  const [user,setUser] =useState(null)
  const [userArray,setUserArray] =useState(null)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Start/>}/>
          <Route path='SignUp' element={<SignUp setUser={setUser}/>}/>
          <Route path='Login' element={<Login setUser={setUser}/>}/>
          <Route path='Profile' element={<Profile user={user} setUser={setUser}/>}/>
          <Route path='Specification' element={<Specification user={user} setUser={setUser}/>}/>
          <Route path='Map' element={<Map user={user} setUser={setUser} setUserArray={setUserArray} OtherLocation={OtherLocation} setOtherLocation={setOtherLocation} />}/>
          <Route path='Account' element={<Account user={user}/>}/>
          <Route path='FriendProfile' element={<FriendProfile userArray={userArray} posts={posts}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
