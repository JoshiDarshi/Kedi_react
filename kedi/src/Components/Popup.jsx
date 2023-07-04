import React, { useState } from 'react'
import Style from './CSS/Style.css' 

function Popup({setRefresh}) {
  const [hospitalName, setHospitalName] = useState("")
  const Addhospital = async() =>{
    let url = "http://donka-node.codemeg.com/hospitallist/add-hospital-name"
    const response = await fetch(url,{
      method : "POST",
      headers : {
        "Content-Type" : 'application/json'
      },
      body : JSON.stringify({hospitalName:hospitalName})
    }) ;
    const result = await response.json()
    console.log(result);
    setHospitalName("")
    setRefresh(p => !p)
  }
    
  return (
    <div className='container-popup'>
        
        <div className='form'>
          <div className='heading'>
             <h4>Add Hospital</h4>
          </div>
          <div className='input' style={{textAlign:'center'}}>
             <input type='text' value={hospitalName} onChange={(e) =>setHospitalName(e.target.value)} placeholder='Enter Hospital' required/>
          </div>
          <div className='buttons'>
            <button >Cancel</button>
            <button onClick={Addhospital}>Add Hospital</button>
          </div>
        </div>
    </div>
  )
}

export default Popup