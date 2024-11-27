
import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import DoctorApprovalPage from "./components/DoctorApprovalPage";

function App() {


  return (
    <>
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form/>}/>
          <Route path="/approve/:id" component={DoctorApprovalPage} />
        </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App
