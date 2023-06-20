import React from 'react'
import Header_main from './Header_main'
import right from './right.png'
import wrong from './wrong.png'
import { Link } from 'react-router-dom'
function Unapproved_patients() {
  return (
    <div>
        <Header_main/>
        <div className="container">
        <div className="row" id='fl'>
          <ul className="col" style={{ listStyleType: 'none', display: 'flex', gap: 600 }}>
            <li>
              <div className='content'>
                <h4 className="text-left" >Unapproved Patients</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <table className="table table-bordered" style={{marginBottom:70}}>
        <thead>
          <tr >
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Patient Name</th>
            
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Email Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Mobile No</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Assign Dr</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Reg. Date</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th >donpat-6</th>
            <td style={{ color: 'skyblue' }}>Roman</td>
            
            <td>Roman@gmail.com</td>
            <td>12343454443</td>
            <td>Doctor D@rshi</td>
            <td>30/May/2023</td>
            <td ><Link to='/professionals'><img src={right} width={30} height={25} style={{borderRadius:9,borderColor:'green'}}/></Link>
            <img src={wrong} width={30} height={25} style={{borderRadius:9,borderColor:'red'}}/></td>
            </tr>
            </tbody>
        </table>
        <div className='main'style={{display:'flex',gap:600}}>
        
     <div className='b-con'>
      <p>showing 1 of 1 pages</p>
     </div>
     <div className='b-rcon' style={{display:'flex',gap:10}} >
      <p>Go to page no.</p>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>1</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}></button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>Previous</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>Next</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}></button>
     </div>
    </div>

   
    </div>
  )
}

export default Unapproved_patients