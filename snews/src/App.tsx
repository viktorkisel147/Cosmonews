import React, {useEffect, useState} from 'react';
import './App.css';
import {Home} from "./pages/home/Home";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Article} from "./pages/atricle/Article";
import {Login} from "./pages/login/Login";
import {ErrAuth} from "./pages/errauth/ErrAuth";


function App() {

const [isLogged,setisLogged] = useState<string>('false')

  useEffect(()=>{
  // let sset = localStorage.getItem('auth')
  setisLogged(String(localStorage.getItem('auth')));

  },[])

  return (
<BrowserRouter>
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/:atricle_id"  element={<Article/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/privatroute"  element={isLogged == 'true'? <Login/>:<ErrAuth/>}/>
  </Routes>
</BrowserRouter>

    );
}

export default App;
