import React, { useState } from 'react'
import Header_main from './Header_main'
import user from './user.jpeg'
import Register from './CSS/Register.css'
function Registration() {
  const [inputs, setinput] = useState({
    firstName : '',
    lastName : ''
  });
  const handleChange = (e)=>{
    setinput(p=>({...p,[e.target.name]:e.target.value}))
  }
  const boxShadowStyle = {
    boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)',
    //borderLeft: '4px solid lightskyblue',
    boxSizing: 'border-box'
  };
  return (

    <div>
      <Header_main />
      <div className="content-container-add-new">
        <div className="main-sec">
          <div className="heading">
            <h3>Register</h3>
          </div>
          <div className="content-img">
            <img src={user} />
          </div>
        </div>
        <div className="form-sec">
            <div className="select-sec">
              <label htmlFor="" style={{fontWeight:600}}>Select your type</label><br />
              <div className="option">
                <button onClick="selectOption('doctor')" style={{borderColor:'lightgray'}}>Doctor</button>
                <button onClick="selectOption('pharmacist')"style={{borderColor:'lightgray'}} >Pharmacist</button>
                <button onClick="selectOption('chemist')"style={{borderColor:'lightgray'}}>Chemist</button>
                <button onClick="selectOption('lab')"style={{borderColor:'lightgray'}}>Lab</button>
              </div>
            </div>
            <div className="name-sec">
              <div className="name-head">
                <p style={{fontWeight:600}}>First Name</p>
              <input value={inputs.firstName} name="firstName" onChange={(e)=>handleChange(e)} type = "text" placeholder="Enter your first name" style={{width:250,padding:10}}></input></div>
              <div className="name-head">
              <p style={{fontWeight:600}}>Last Name</p>
              <input value={inputs.lastName} name="lastName" onChange={(e)=>handleChange(e)} type = "text" placeholder="Enter your last name"style={{width:250,padding:10}}></input></div>
            </div>
            <div className="select-sec">
              <label htmlFor="" style={{fontWeight:600}}>Select your gender:</label><br />
              <div className="option">
                <button onclick="selectOption('male')" style={{borderColor:'lightgray'}}>Male</button>
                <button onclick="selectOption('female')"style={{borderColor:'lightgray'}}>Female</button>
                <button onclick="selectOption('other')"style={{borderColor:'lightgray'}}>Others</button>
              </div>
            </div>
            <div className="p-detail">
            <div className="name-head">
              <p style={{fontWeight:600}}>Date of Birth</p>
              <input type = "text" style={{width:250,padding:10}}></input></div>
              <div className="name-head">
              <p style={{fontWeight:600}}>Phone Number</p>
              <input type = "text" placeholder='Enter your number'style={{width:250,padding:10}}></input></div>
            </div>
            <div className="e-pass">
            <div className="name-head">
              <p style={{fontWeight:600}}>Email Address</p>
              <input type = "text" placeholder='Enter your email'style={{width:250,padding:10}}></input></div>
              <div className="name-head">
              <p style={{fontWeight:600}}>Password</p>
              <input type = "password" placeholder='********'style={{width:250,padding:10}}></input></div>
            </div>
            <div className="address">
              <p style={{fontWeight:600}}>Address</p>
              <input type = "text" placeholder = 'Enter your Address'style={{width:250,padding:10}}></input>
            </div>
            <div className="select-doc">
            <div className="name-head">
              <p style={{fontWeight:600}}>Select document type</p>
              <select id="" style={{width:250,padding:10}} >
                  <option value=""> Select... </option>
                  <option calue=""> PAN CARD </option>
                  <option calue=""> Aadhar Card </option>
                  <option calue=""> Driving Liscence </option>
              </select></div>
              <div className="name-head">
              <p style={{fontWeight:600}}>PID Number</p>
              <input type = "text" placeholder="Enter your id" style={{width:250,padding:10}}></input></div>
            </div>
            <div className="doc-upload">
            <div className="name-head">
              <p style={{fontWeight:600}}> Document upload</p>
                <input type = "file"></input></div>
            </div>
        </div>
        <div className="end-btn" onClick={()=> console.log(inputs)}>
          <button >Register</button>
        </div>
      </div>

    </div>
  )
}

export default Registration