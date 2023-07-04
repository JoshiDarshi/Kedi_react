import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profile from './profile.jpeg'
import bell from './bell-i.png'
import Header from './CSS/Header.css'
import { useEffect } from 'react'
function Header_main() {
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="navbar navbar-expand-lg  fixed-top ">
            <div className="container">
                <h3 style={{ color: 'white' }} >Kedi</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav " style={{ gap: 20 }}>
                        <li className="nav-item" >
                            <Link to="/unapproved_professionals" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Unapproved Professionals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/unapproved_patients" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Unapproved Patients</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/professionals" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}> Professionals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/patients" style={{ color: 'black', textDecoration: 'none', fontWeight: 600 }}> Patients</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registration" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Add new</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hospital" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Hospital</Link>
                        </li>
                        <li className="nav-item " >
                            <Link to="/notification"><img src={bell} height={30} width={30} className='rounded-circle' /></Link>
                        </li>

                    </ul>
                    <div className='profile-pic'>
                        <li className="nav-item" style={{ listStyleType: 'none', paddingLeft: 8 }}>
                            <img src={profile} height={45} width={45} className='rounded-circle' onClick={handleImageClick} style={{ border: '3px solid white' }} />
                            {isOpen && (<div className="dropdown-menu show" style={{ display: 'block' }}>
                                <a className="dropdown-item" href="/Myaccount">
                                    MyAccount
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">
                                    Logout
                                </a>
                                 </div>)}
                        </li>
                    </div>


                </div>
            </div>
        
    </nav >

  )
}

export default Header_main