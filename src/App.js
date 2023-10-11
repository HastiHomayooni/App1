
import './App.css';
import Start from '../src/Start';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Start/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
