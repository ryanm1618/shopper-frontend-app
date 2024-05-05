import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
