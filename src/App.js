import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Test from "./components/Test";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route element={<Home/>} path="/" ></Route>
                <Route element={<Test/>} path="/test"></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
