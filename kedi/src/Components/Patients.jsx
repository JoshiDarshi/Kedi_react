import React from 'react'
import Header_main from './Header_main'

import delete_t from './delete_t.jpeg'
import Login_d from './CSS/Login_d.css'
function Patients() {

  return (

    <div><Header_main />
      <div className="container">
        <div className="row" id='fl'>
          <ul className="col" style={{ listStyleType: 'none', display: 'flex', gap: 600 }}>
            <li>
              <div className='content'>
                <h4 className="text-left" >Patient List</h4>
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
          <tr>
            <th >donpat-1</th>
            <td style={{ color: 'skyblue' }}>Roman</td>
            <td>Roman@gmail.com</td>
            <td>12343454443</td>
            <td>26-Apr-2023</td>
            <td ><img src={delete_t} width={50} height={40} /></td>

          </tr>
          <tr>
            <th scope="row">donpat-2</th>
            <td style={{ color: 'skyblue' }}>Jacob</td>
            <td>Thornton</td>
            <td>12343454443</td>
            <td>26-Apr-2023</td>
            <td ><img src={delete_t} width={50} height={40} /></td>
          </tr>
          <tr>
            <th scope="row">donpat-3</th>
            <td style={{ color: 'skyblue' }}>Larry the Bird</td>
            <td>@twitter</td>
            <td>12343454443</td>
            <td>26-Apr-2023</td>
            <td ><img src={delete_t} width={50} height={40} /></td>
          </tr>
          <tr>
            <th scope="row">donpat-4</th>
            <td style={{ color: 'skyblue' }}>Larry the Bird</td>
            <td>@twitter</td>
            <td>12343454443</td>
            <td>26-Apr-2023</td>
            <td ><img src={delete_t} width={50} height={40} /></td>
          </tr>
          <tr>
            <th scope="row">donpat-5</th>
            <td style={{ color: 'skyblue' }}>Larry the Bird</td>
            <td>@twitter</td>
            <td>12343454443</td>
            <td>26-Apr-2023</td>
            <td ><img src={delete_t} width={50} height={40} /></td>
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

export default Patients