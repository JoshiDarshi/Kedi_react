import React, { useState } from 'react'
import { useEffect } from 'react'
import Header_main from './Header_main'
import { Button } from 'bootstrap'
import delete_t from './delete_t.jpeg'
import edit from './edit.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactjs-popup/dist/index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Popup from './Popup'
import Deletepopup from './Deletepopup'
import EditHospital from './EditHospital'


function Hospital() {
  const [show, setshow] = useState(false)
  //to refresh
  const [refresh, setRefresh] = useState(false)
  // for hospital
  const [hospitals, setHospitals] = useState([])
  // to confirm 
  const [showConfirm, setShowConfirm] = useState(false)
  // to delete the hospitals
  const [delId, setDelId] = useState(null)
  // to edit hospital
  const [edit, setEdit] = useState(false)
  // to get All the hospitals
  const getHospitals = async () => {
    const response = await fetch("http://donka-node.codemeg.com/hospitallist/get-all-hospital-name");
    const result = await response.json()
    console.log("result", result)
    if (result.status) {
      console.log(result.data);
      setHospitals(result.data)
    }
  }
  // to pass id to popup
  const forDelete = (hospitalId) => {
    setShowConfirm(p => !p)
    setDelId(hospitalId)
    console.log("hospitalId", hospitalId)
  }

  useEffect(() => {
    console.log("hello")
    getHospitals()
  }, [refresh])

  return (
    <>
      <div>

        <Header_main />
        <div className="container" style={{ marginTop: 120 }}>
          <div className="row" >
            <ul className="col" style={{ listStyleType: 'none', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <li>
                <div className='content'>
                  <h4 className="text-left" >Hospitals List</h4>

                </div>
              </li>
              <li>

                <div className="input-group" style={{ display: 'flex' }}>
                  <div>
                    <button className=" btn btn-primary " onClick={() => setshow(p => !p)}>Add hospital</button>
                  </div >
                </div>
              </li>
            </ul>
          </div>


          <table class="table table-bordered" style={{ marginTop: 30 }}>
            <thead>
              <tr >
                <th scope="col" style={{ backgroundColor: 'lightgray' }}>Id</th>
                <th scope="col" style={{ backgroundColor: 'lightgray' }}>Hospitals</th>
                <th scope="col" style={{ backgroundColor: 'lightgray' }}>Edit</th>
                <th scope="col" style={{ backgroundColor: 'lightgray' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                hospitals.map((hospital, i) => {
                  return (
                    <tr key={i}>
                      <td >{hospital.hospitalId}</td>
                      <td style={{ color: 'blue' }}>{hospital.hospitalName}</td>
                      <td style={{textAlign:'center'}} onClick={() => setEdit(p => !p)}><i class="fa-solid fa-pen" style={{height:23,width:30,color:'blue',backgroundColor:'lightblue',textAlign:'center'}}></i> </td>
                      <td style={{textAlign:'center'}} onClick={() => forDelete(hospital.hospitalId)}><i class="fa-regular fa-trash-can" style={{height:23,width:30,color:'red',backgroundColor:'#FFCCCC ',textAlign:'center'}}>
                </i></td>
                    </tr>

                  )
                })
              }

            </tbody>
          </table>
          <div className='main' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='b-con'>
              <p>showing 1 of 1 pages</p>
            </div>
            <div className='b-rcon' style={{ display: 'flex', gap: 10, alignItems: 'baseline' }} >
              <p>Go to page no.</p>
              <button className='btn btn primary' style={{ backgroundColor: 'lightgray' }}>1</button>
              <button className='btn btn primary' style={{ backgroundColor: 'lightgray' }}><i class="fa-solid fa-angles-left"></i></button>
              <button className='btn btn primary' style={{ backgroundColor: 'lightgray' }}>Previous</button>
              <button className='btn btn primary' style={{ backgroundColor: 'lightgray' }}>Next</button>
              <button className='btn btn primary' style={{ backgroundColor: 'lightgray' }}><i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>         </div>
      </div>
      {show && <Popup setRefresh={setRefresh} setShowConfirm={setShowConfirm}/>}
      {edit && <EditHospital />}
      {showConfirm && <Deletepopup hospitalId={delId} setShowConfirm={setShowConfirm} setRefresh={setRefresh}/>}

    </>
  )
}

export default Hospital