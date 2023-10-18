
import './App.css';
import Start from '../src/Start';
import SignUp from '../src/SignUp';
import Login from '../src/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Start/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='Login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
