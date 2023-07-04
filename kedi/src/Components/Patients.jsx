import React, { useEffect, useState } from 'react'
import Header_main from './Header_main'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons"
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import delete_t from './delete_t.jpeg'
import Login_d from './CSS/Login_d.css'
function Patients() {
const [patients,setpatients] = useState([])
const getallpatients = async()=>{
  const response = await fetch("http://donka-node.codemeg.com/patient/getallpatient")
  const result = await response.json()
  console.log(result)
  if(result.status){
    console.log(result.data)
    setpatients(result.data)
  }

}
useEffect(()=>{
  getallpatients()
},[])
  return (

    <div><Header_main />
      <div className="container" style={{marginTop:90}}>
        <div className="row" >
          <ul className="col" style={{ listStyleType: 'none', display: 'flex',alignItems:'center',justifyContent:'space-between' }}>
            <li>
              <div className='content'>
                <h4 className="text-left" >Patient List</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="input-group" style={{alignItems:'flex-end',display:'flex'}}>
                 <button type='submit' id='sb'> <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></button>
                  <input type="text" className="form-control search-input" placeholder="Search" ></input>
                </div >
              </div>
            </li>
          </ul>
        </div>
      
      <table class="table table-bordered">
        <thead>
          <tr >
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Patient Details</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Email Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Mobile No</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Reg. Date</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            patients.map((patient,i)=>{
              return(
                <tr key={i}>
            <th >{patient.patientId}</th>
            <td style={{ color: 'blue' }}>{patient.patientName}</td>
            <td>{patient.patientEmail}</td>
            <td>{patient.patientMobile}</td>
            <td>{patient.created_at}</td>
            <td style={{textAlign:'center'}}>
              <i class="fa-regular fa-trash-can" style={{height:23,width:30,color:'red',backgroundColor:'#FFCCCC '}}>
                </i></td>

          </tr>

              )
            })
          }          
          </tbody>
      </table>
      <div className='main'style={{display:'flex',justifyContent: 'space-between'}}>
     <div className='b-con'>
      <p>showing 1 of 1 pages</p>
     </div>
     <div className='b-rcon' style={{display:'flex',gap:10,alignItems:'baseline'}} >
      <p>Go to page no.</p>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>1</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}><i class="fa-solid fa-angles-left"></i></button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>Previous</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>Next</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}><i class="fa-solid fa-angles-right"></i></button>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Patients