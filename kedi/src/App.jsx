import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Forgot from './Components/forgot'
//import Login_d from './Components/CSS/Login_d.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Header_main'
import Home from './Components/Header_main'
import Otp_verify from './Components/Otp_verify'
import Otp_card from './Components/Otp_card'
import Header_main from './Components/Header_main'
import Patients from './Components/Patients'
import Professionals from './Components/Professionals'
import Notification from './Components/Notification'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Unapproved_Professionals from './Components/Unapproved_Professionals'
import Hospital from './Components/Hospital'
import Unapproved_patients from './Components/Unapproved_patients'
import Registration from './Components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/otp' element={<Otp_verify/>}/>
          <Route path='/otp_card' element={<Otp_card/>}/>
          <Route path='/header' element={<Header_main/>}/>
          <Route path='/patients' element={<Patients/>}/>
          <Route path='/professionals' element={<Professionals/>}/>
          <Route path='/unapproved_professionals' element={<Unapproved_Professionals/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/hospital' element={<Hospital/>}/>
          <Route path='/unapproved_patients' element={<Unapproved_patients/>}/>
          <Route path='/registration' element={<Registration/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
