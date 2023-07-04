import React, { useEffect, useState } from 'react'
import Header_main from './Header_main'
import right from './right.png'
import wrong from './wrong.png'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Unapproved_Professionals() {
  const [unprofessionals,setunprofessionals] = useState([])
  const getunprofessionals = async () =>{
    const response = await fetch("http://donka-node.codemeg.com/user/get-all-unapproved-user")
    const result = await response.json()
    console.log(result)
    if(result.data){
      setunprofessionals(result.data)
    }
  }
  useEffect(()=>{
    getunprofessionals()
  },[])
  return (
    <div><Header_main/>
    <div className="container" style={{marginTop:90}}>
        <div className="row" >
          <ul className="col" style={{ listStyleType: 'none', display: 'flex',alignItems:'flex-end' ,justifyContent:'space-between'}}>
            <li>
              <div className='content'>
                <h4 className="text-left" >Unapproved Professionals</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="input-group" style={{alignItems:'flex-end'}}>
                <button type='submit' id='sb'> <FontAwesomeIcon icon={faSearch} style={{color:'skyblue'}}></FontAwesomeIcon></button>
                  <input type="text" className="form-control search-input" placeholder="Search" ></input>

                </div >
              </div>
            </li>
          </ul>
        </div>
      
      <table className="table table-bordered" style={{marginBottom:50}}>
        <thead>
          <tr >
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>User Details</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>User Type</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Email Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Mobile No</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Reg. Date</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Status</th>
          </tr>
        </thead>
        <tbody>
        {
          unprofessionals.map((unprofessionals,i)=>{
            return(
              <tr key={i}>
            <th >{unprofessionals.userId}</th>
            <td style={{ color: 'skyblue' }}>{unprofessionals.userName}</td>
            <td>{unprofessionals.userType}</td>
            <td>{unprofessionals.userEmail}</td>
            <td>{unprofessionals.userMobile}</td>
            <td>{unprofessionals.created_at}</td>
            <td style={{textAlign:'center'}}><Link to='/professionals'>
            <i class="fa-solid fa-check" style={{borderRadius:120,padding:10,color:'darkgreen',backgroundColor:'lightgreen',marginRight:8}}></i>
            <i class="fa-solid fa-xmark" style={{borderRadius:150,padding:10,color:'red',backgroundColor:'#FFCCCC',marginRight:8}}></i>
            </Link>
            </td>
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
    </div>     </div>
    </div>
  )
}

export default Unapproved_Professionals