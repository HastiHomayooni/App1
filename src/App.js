
import './App.css';
import Start from '../src/Start';
import SignUp from '../src/SignUp';
import Login from '../src/Login';
import Profile from '../src/Profile';
import Specification from '../src/Specification';
import Map from '../src/Map';
import Account from '../src/Account'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Start/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Profile' element={<Profile/>}/>
          <Route path='Specification' element={<Specification/>}/>
          <Route path='Map' element={<Map/>}/>
          <Route path='Account' element={<Account/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
