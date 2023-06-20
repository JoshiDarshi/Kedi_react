import React from 'react'
import { Link } from 'react-router-dom'
import profile from './profile.jpeg'
import bell from './bell-i.png'
function Header_main() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top " style={{ backgroundColor: 'lightskyblue' }}>
            <div className="container">
            <h3 style={{ color: 'white' }} >Kedi</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav " style={{gap:15}}>
                    <li className="nav-item" >
                        <Link to="/unapproved_professionals"style={{color:'white'}}>Unapproved Professionals</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/unapproved_patients"style={{color:'white'}}>Unapproved Patients</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/professionals"style={{color:'white'}}> Professionals</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/patients"style={{color:'black'}}> Patients</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/registration"style={{color:'white'}}>Add new</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/hospital"style={{color:'white'}}>Hospital</Link>
                    </li>
                    <li className="nav-item " >
                        <Link to="/notification"><img src={bell} height={30} width={30} className='rounded-circle'/></Link>
                    </li>
                    
                </ul>
                <div className='profile-pic'>
                    <li className="nav-item" style={{listStyleType:'none',padding:8}}>
                        <Link to="/"><img src={profile} height={50}width={50} className='rounded-circle' style={{border: '2px solid black'}}/></Link>
                    </li>
                    </div>
            </div>
        </div>
    </nav >

  )
}

export default Header_main